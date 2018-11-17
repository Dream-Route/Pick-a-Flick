// Set up MySQL connection.
//var mysql = require("mysql");


//////////////////////

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("pickAflick", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;


//////////////////////////////////

// var connection;

// if (process.env.JAWSDB_URL){ 

//   connection= mysql.createConnection(process.env.JAWSDB_URL);
// } else {

//    connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     port: 3306,
//     password: "",
//     database: "pickAflick"


// });



// };

// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
    
//   }
//   console.log("connected as id " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;