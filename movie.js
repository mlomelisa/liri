var axios = require('axios');
var fs = require("fs");

// Function movieThis
var movieThis = function(movie){ 
  
 
  this.movieSearch = function(movie) {
    if (!movie) {
     
      movie = ['reservoir','dogs'];
      movie = ('"' + movie.join(' ') + '"');
      
     }

  axios.get("http://www.omdbapi.com/?t="+movie+"&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    
    var movieData = [
      "Title: " + response.data.Title,
      "Year: " + response.data.Year,
      "IMDB Rating: " + response.data.imdbRating,
      "Rotten Tomatoes Raiting: " + response.data.Ratings[1].Value,
      "Country: " + response.data.Country,
      "Language: " + response.data.Language,
      "Plot: " + response.data.Plot,
      "Actors: " + response.data.Actors
    ].join('\n\n')

    fs.appendFile('log.txt', movieData + '\n-----------\n',
    function(error){
      if (error) {
        throw error;
      }
      console.log(movieData)
    });

  }
);

}


}

module.exports = movieThis;