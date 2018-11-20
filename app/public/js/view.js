
      // The createRow function takes data returned by OMDB and appends the table data to the tbody
      var addAmovie=["The Shawshank Redemption","The Usual Suspects","Papillon","The Terminator"];

      var createRow = function(data) {
        // Get reference to existing tbody element, create a new table row element
        var tBody = $("tbody");
        var tRow = $("<tr>");
       
  
        // Methods run on jQuery selectors return the selector they we run on
        // This is why we can create and save a reference to a td in the same statement we update its text
        var titleTd = $("<td>").text(data.Title);
        var ratedTd = $("<td>").text(data.Rated);
        var runtimeTd = $("<td>").text(data.Runtime);
        // Append the newly created table data to the table row
        tRow.append(titleTd, ratedTd, runtimeTd);
        // Append the table row to the table body
        tBody.append(tRow);
      };
  
      // The search OMDB function takes a movie, searches the omdb api for it, and then passes the data to createRow
      var searchOMDB = function(movie) {
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          createRow(response);
        });
      };
  
      // Search the OMDB API for the following movies, and append table rows for each
      for (i=0; i<addAmovie.length; i++){
        
        searchOMDB(addAmovie[i]);
      
  }
  