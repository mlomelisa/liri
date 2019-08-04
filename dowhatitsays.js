var fs = require("fs");

var concertThisFunc = require("./concert");
var concert = new concertThisFunc();


var spotifyThisSongFunc = require("./spotify");
var spotifyThis = new spotifyThisSongFunc();

var movieThisFunc = require("./movie");
var movieThis = new movieThisFunc();


// Function Do what it says

var doWhatItSays = function() {

  this.doThis = function() {
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
    
    fs.appendFile('log.txt', action + ' ' + entry + ':\n',
    function(error){
      if (error) {
        throw error;
      }
    
    });
    
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
}

module.exports = doWhatItSays;