const express = require("express");
const app = express();

const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "employeeDB",
});

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
