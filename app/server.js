var express = require('express');
var path = require('path')
var Table = require('cli-table');
var PORT = process.env.PORT || 9725;
var app = express();
var connection = require("./config/connection.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

////////////////////////////////???????????///////


var movies = "movies";



  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
 
var movie = "SELECT * FROM " + movies;

connection.query(movie, function(err, result) {

  if (err) {
    throw err;

      
      
    };
  
console.log(result)
});



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
