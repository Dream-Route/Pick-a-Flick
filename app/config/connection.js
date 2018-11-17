// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){ 

  connection= mysql.createConnection(process.env.JAWSDB_URL);
} else {

   connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "",
    database: "pickAflick"


});

};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
    var table = new Table({
        head: ['id', 'movie_name', 'movie_rated', 'duration'],
        colWidths: [10, 20, 20, 20]
      });
  
      // table is an Array, so you can `push`, `unshift`, `splice` and friends
      for (i = 0; i < result.length; i++) {
  
        table.push(
          [result[i].id, result[i].movie_name, result[i].movie_rated, result[i].duration]
        );
  
      }
  
      console.log(table.toString());
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;