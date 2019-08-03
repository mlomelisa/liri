require("dotenv").config();

var keys = require("./keys.js");
var axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var action = process.argv[2];


// Function ConcertThis
var concertThis = function() {
  
  artist = process.argv.slice(3).join('%20');
  
 axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming").then(
   function(response) {
     
     data = response.data;
     console.log('Next Events: ')
     for(let i=0; i< data.length; i++){
       date = moment(data[i].datetime).format('MM/DD/YYYY')
       console.log(data[i].venue.name + ', ' +data[i].venue.country + ', ' + date)
       
     }
   }
 )

}// ConcertThis function


// Function Spotify This Song

 var spotifyThisSong = function(song) {
  var song = process.argv.slice(3).join(' ');

   var spotify = new Spotify(keys.spotify);
  
   var songSearch = function(song){
   
       spotify.search({type: 'track', query: song, limit: 1})
      .then(function(response) {
        
        for (let i =0; i < response.tracks.items.length; i++){
          
          var artist_name = response.tracks.items[i].artists[0].name;
          var song_name = response.tracks.items[i].name;
          var link_spotify = response.tracks.items[i].external_urls.spotify;
          var album_name = response.tracks.items[i].album.name;

          console.log("Item: " + i)
          console.log('Artist(s): ' + artist_name);
          console.log('Song: ' + song_name);
          console.log('Link: ' + link_spotify);
          console.log('Album: ' + album_name)
          console.log("\n")
                
        }
         
       })
       .catch(function(err) {
          console.log(err);
   
        });  
      }
   
   if (song.length === 0) {
     
    song = ['the','sign'];
    song = ('"' + song.join(' ') + '"');
    songSearch(song);

   } else { 
    song = ('"' + song + '"'); 
  songSearch(song);

  }
 }

// Function movieThis
var movieThis = function(){ 
  var movie = process.argv.slice(3).join('+');
 
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
    console.log(dataArr);
    entry = dataArr[1];
    action = dataArr[0];
    
    switch (action) {
      case 'concert-this':
          concertThis(entry);
      break;
      case 'spotify-this-song':
          spotifyThisSong(entry);
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
  
  });
  
}


// Options for user

switch (action) {
  case 'concert-this':
      concertThis();
  break;
  case 'spotify-this-song':
      spotifyThisSong();
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

// spotifyThisSong('The Sign')

