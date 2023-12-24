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

  
