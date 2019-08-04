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

var doWhatItSaysFunc = require("./dowhatitsays");
var doThis =  new doWhatItSaysFunc();


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
      doThis.doThis();
  break;

  default:
    console.log('This option is not valid')

 }

 fs.appendFile('log.txt', action + ':\n',
 function(error){
   if (error) {
     throw error;
   }
 
 });



