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