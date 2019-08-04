require("dotenv").config();


var fs = require("fs");

var action = process.argv[2];
var concertThisFunc = require("./concert");
var concert = new concertThisFunc();
var artist = process.argv.slice(3).join('%20');

var spotifyThisSongFunc = require("./spotify");
var spotifyThis = new spotifyThisSongFunc();
var song = process.argv.slice(3).join(' ');

var movieThisFunc = require("./movie");
var movieThis = new movieThisFunc();
var movie = process.argv.slice(3).join('+');


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
         movieThis.movieSearch(entry);
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
    movieThis.movieSearch(movie);
  break;
  case 'do-what-it-says':
      doWhatItSays();
  break;

  default:
    console.log('This option is not valid')

}



