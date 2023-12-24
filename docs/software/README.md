# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
    
```sql

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS mydb DEFAULT CHARACTER SET utf8 ;
USE mydb ;


-- -----------------------------------------------------
-- Table mydb.Survey
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Survey (
  id INT NOT NULL,
  title MEDIUMTEXT NULL,
  description LONGTEXT NULL,
  created DATE NULL,
  User_id INT NOT NULL,
  PRIMARY KEY (id, User_id),
  INDEX fk_Survey_User1_idx (User_id ASC) VISIBLE,
  CONSTRAINT fk_Survey_User1
    FOREIGN KEY (User_id)
    REFERENCES mydb.User (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Question
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Question (
  id INT NOT NULL,
  text MEDIUMTEXT NULL,
  type TINYTEXT NULL,
  Survey_id INT NOT NULL,
  PRIMARY KEY (id, Survey_id),
  INDEX fk_Question_Survey1_idx (Survey_id ASC) VISIBLE,
  CONSTRAINT fk_Question_Survey1
    FOREIGN KEY (Survey_id)
    REFERENCES mydb.Survey (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Answer
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Answer (
  id INT NOT NULL,
  text MEDIUMTEXT NULL,
  User_id INT NOT NULL,
  Question_id INT NOT NULL,
  PRIMARY KEY (id, User_id, Question_id),
  INDEX fk_Answer_User_idx (User_id ASC) VISIBLE,
  INDEX fk_Answer_Question1_idx (Question_id ASC) VISIBLE,
  CONSTRAINT fk_Answer_User
    FOREIGN KEY (User_id)
    REFERENCES mydb.User (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Answer_Question1
    FOREIGN KEY (Question_id)
    REFERENCES mydb.Question (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table mydb.Permission
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Permission (
  id INT NOT NULL,
  name TINYTEXT NOT NULL,
  PRIMARY KEY (id, name))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Grant
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Grant (
  id INT NOT NULL,
  appointed DATE NULL,
  Role_id INT NOT NULL,
  Permission_id INT NOT NULL,
  PRIMARY KEY (id, Role_id, Permission_id),
  INDEX fk_Grant_Role1_idx (Role_id ASC) VISIBLE,
  INDEX fk_Grant_Permission1_idx (Permission_id ASC) VISIBLE,
  CONSTRAINT fk_Grant_Role1
    FOREIGN KEY (Role_id)
    REFERENCES mydb.Role (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Grant_Permission1
    FOREIGN KEY (Permission_id)
    REFERENCES mydb.Permission (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.State
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.State (
  id INT NOT NULL,
  name TINYTEXT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Action
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Action (
  id INT NOT NULL,
  date DATE NULL,
  Survey_id INT NOT NULL,
  State_id INT NOT NULL,
  Role_id INT NOT NULL,
  PRIMARY KEY (id, Survey_id, State_id, Role_id),
  INDEX fk_Action_Survey1_idx (Survey_id ASC) VISIBLE,
  INDEX fk_Action_State1_idx (State_id ASC) VISIBLE,
  INDEX fk_Action_Role1_idx (Role_id ASC) VISIBLE,
  CONSTRAINT fk_Action_Survey1
    FOREIGN KEY (Survey_id)
    REFERENCES mydb.Survey (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Action_State1
    FOREIGN KEY (State_id)
    REFERENCES mydb.State (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_Action_Role1
    FOREIGN KEY (Role_id)
    REFERENCES mydb.Role (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

## RESTfull сервіс для управління даними

RESTfull API для управління даними таблиці Survey створеної в MySQL 
було створено за допомогою фреймворку Express на мові Javascript. 
RESTfull API представляє собою CRUD застосунок. 

### Файл підключення до бази даних

```
   'use strict';

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3282",
  database: "mydb",
  });

  conn.connect();

  module.exports = conn;

```

### Кореневий файл серверу

```
   'use strict';

const express = require("express");
const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.all("*", (req, res, next) => {
    res.status(404).json({
        status: "error",
        message: `Cannot find ${req.originalUrl} on this server!`
    });
});

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
   });

module.exports = app;

```

### Файл з роутером
```
'use strict';

const express = require("express");
const router = express.Router();
const { getAllUsers, AddNewUser, getUser, updateUser, deleteUser } = require("../controllers");

router
 .get("/users", getAllUsers)
 .get("/user/:id", getUser)
 .post("/user", AddNewUser)
 .put("/user/:id", updateUser)
 .delete("/user/:id", deleteUser);

module.exports = router;
```

### Файл контролерів для обробки запитів

```
  'use strict';

const AppError = require("../utils/appError");
const conn = require("../services/db");

const getAllUsers = (req, res) => {
  const query = "SELECT * FROM User";
  conn.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(result);
  });
};

const getUser = (req, res) => {
  const query = `SELECT * FROM User WHERE id=${req.params.id}`;
  conn.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.sendStatus(404);
    res.status(200).json(result[0]);
  });
};

const AddNewUser = (req, res) => {
    const { firstname, email, password, Role_id } = req.body;
    if (!(firstname && email && password)) {
      return res.status(400).json({ message: "Firstname, email, and password are required" });
    }
  
    const queryToFindUser = `SELECT * FROM User WHERE email="${email}"`;
    conn.query(queryToFindUser, (err, result) => {
      if (err) return res.status(500).json(err);
      if (result.length !== 0) return res.status(406).json('User with this email already exists');
  
      const query = "INSERT INTO User SET ?";
      const user = {
        firstname,
        email,
        password,
        Role_id: Role_id || 1,
      };
  
      conn.query(query, user, (err) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: "New user created" });
      });
    });
  };
  
  

const updateUser = (req, res) => {
  const { firstname, email, password } = req.body;
  if (!(firstname || email || password)){
    res
    .status(400)
    .json({ message: "Firstname, email, and password are required" });
    return
  }
  conn.query(`SELECT * FROM User WHERE id=${req.params.id}`, (err, result) =>{
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json('No user with this id');
  let query = "";
  if (firstname) {
    query = `UPDATE User SET firstname = '${req.body.firstname}' WHERE id = '${req.params.id}'`;
    conn.query(query, (err) => {
      if (err) return res.status(500).json(err);
    });
  }
  if (email) {
    query = `UPDATE User SET email = '${req.body.email}' WHERE id = '${req.params.id}'`;
    conn.query(query, (err) => {
      if (err) return res.status(500).json(err);
    });
  }
  if (password) {
    query = `UPDATE User SET password = '${req.body.password}' WHERE id = '${req.params.id}'`;
    conn.query(query, (err) => {
      if (err) return res.status(500).json(err);
    });
  }
  res.status(200).json({ message: "User updated" });
});
};

const deleteUser = (req, res) => {
  const query = `DELETE FROM User WHERE id=${req.params.id}`;
  conn.query(`SELECT * FROM User WHERE id=${req.params.id}`, (err, result) =>{
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json('No user with this id');
  conn.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "User deleted" });
  });
  });
};

module.exports = { getAllUsers, AddNewUser, getUser, updateUser, deleteUser };

```


### Виняткові ситуації, які можуть виникнути

```
  'use strict';

class AppError extends Error {
    constructor(msg, statusCode) {
     super(msg);

     this.statusCode = statusCode;
     this.error = `$[statusCode]`.startsWith("4") ? "fail" : "error"; 
     this.isOperational = true;

     Error.captureStackTrace(this, this.constructor);
 }
}
module.exports = AppError;
```

```
   'use strict';

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
     status: err.status,
     message: err.message,
  });
};
```
