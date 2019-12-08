/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:  'DATABASE NAME'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// export connection to node app
module.exports = con;

*\