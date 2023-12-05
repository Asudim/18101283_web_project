var fs = require('fs');
var path = require('path');
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
  secret: 'web', 
  resave: false,
  saveUninitialized: true
}));

const dbConfig_login = {
    host: 'your_database_host',
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'your_database_name'
  };
const dbConfig_board = {
    host: 'your_database_host',
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'your_database_name'
}
  // Create a MySQL connection
const sql_login = mysql.createConnection(dbConfig_login);
const sql_board = mysql.createConnection(dbConfig_board);
  
  // Export the connection to be used in other files
module.exports = {sql_login, sql_board};
  

const loginRouter = require('/login');
const boardRouter = require('/board');
const findRouter = require('/find');
const registerRouter = require('/register');
const lookupRouter = require('/lookup');
const writeRouter = require('/write');
const passwordRouter = require('/password');
const modifyRouter = require('/board');


  // Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });