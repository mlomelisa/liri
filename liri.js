require("dotenv").config();

var axios = require('axios');
var fs = require("fs");

var action = process.argv[2];
var concertThisFunc = require("./concert");
var concert = new concertThisFunc();
var artist = process.argv.slice(3).join('%20');

var spotifyThisSongFunc = require("./spotify");
var spotifyThis = new spotifyThisSongFunc();
var song = process.argv.slice(3).join(' ');



// Function movieThis
var movieThis = function(movie){ 
  var movie = process.argv.slice(3).join('+');
 
  var  movieSearch = function(movie) {


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
if (!movie) {
     
  movie = ['reservoir','dogs'];
  movie = ('"' + movie.join(' ') + '"');
  movieSearch(movie);

 } else { 

  movieSearch(movie);

}

}

// Function Do what it says

var doWhatItSays = function() {

  fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
  
    // We will then re-display the content as an array for later use.
   
    action = dataArr[0];
    entry = dataArr[1].replace(/"/g, '');
    
    
    switch (action) {
      case 'concert-this':
        concert.concertSearch(entry);
      break;
      case 'spotify-this-song':
          spotifyThis.songSearch(entry);
      break;
      case 'movie-this':
          movieThis(entry);
      break;
      case 'do-what-it-says':
          doWhatItSays(entry);
      break;
    
      default:
        console.log('This option is not valid')
    
    }
  
  });
  
}


// Options for user

switch (action) {

  case 'concert-this':
    concert.concertSearch(artist);
  break;
  case 'spotify-this-song':
      spotifyThis.songSearch(song);
  break;
  case 'movie-this':
      movieThis();
  break;
  case 'do-what-it-says':
      doWhatItSays();
  break;

  default:
    console.log('This option is not valid')

}



