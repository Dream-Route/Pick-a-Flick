// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Movie = sequelize.define("movie", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
//   // the name of the character (a string)
  movie_name: Sequelize.STRING,

  // the name of the character (a string)
  titleTD: Sequelize.STRING,
//   // the character's role (a string)
  movie_rated: Sequelize.STRING,

  


// }, {
//   // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  // freezeTableName: true
});

// Syncs with DB
Movie.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Movie;
