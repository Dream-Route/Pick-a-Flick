var express = require('express');
var path = require('path')
var PORT = process.env.PORT || 8080;
var app = express();
var sequelize = require("./config/connection.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

////////////////////////////////???????????///////

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "html", "all.html"));
});

//var movies = "movies";

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
 
//var movie = "SELECT * FROM " + movies;

// connection.query(movie, function(err, result) {
   
//     if (err) {
//         throw err; 
          
//     }
//     console.log(result)
// });
sequelize.query("SELECT * FROM movies").then(function(result){
    console.log(result);
})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
