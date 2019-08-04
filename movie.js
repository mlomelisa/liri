var axios = require('axios');

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
    console.log("\n")
    console.log("Title: " + response.data.Title)
    console.log("Year: " + response.data.Year)
    console.log("IMDB Rating: " + response.data.imdbRating)
    console.log("Rotten Tomatoes Raiting: " + response.data.Ratings[1].Value)
    console.log("Country: " + response.data.Country)
    console.log("Language: " + response.data.Language)
    console.log("Plot: " + response.data.Plot)
    console.log("Actors: " + response.data.Actors)
    console.log("\n")
   
  }
);

}


}

module.exports = movieThis;