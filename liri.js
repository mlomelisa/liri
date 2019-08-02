require("dotenv").config();

var keys = require("./keys.js");
var axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');

var SpotifyWebApi = require('spotify-web-api-node');

// var spotifyApi = new SpotifyWebApi();

var action = process.argv[2];
var entryArray = []

// Function concatenate entry from Arguments 3 in advance.

var ConcatenateEntry = function(){
  var entry = process.argv;
 
  for (let j=3; j<entry.length ; j++){
    entryArray.push(entry[j]);
  }
 
  return entryArray;
}

// Function ConcertThis
var concertThis = function() {
  var artist = ConcatenateEntry();
  
  artist = artist.join('%20');
  
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
 var spotifyThisSong = function() {
  // var spotifyApi = new SpotifyWebApi(keys.spotify); 
     var spotify = new Spotify(keys.spotify);
   var song = ConcatenateEntry();
   song = song.join(' ');
  
  spotify.search({type: 'track', query: song, limit: 4})
      .then(function(response) {
        
         var artist_name = response.tracks.items[0].artists[0].name;
         var song_name = response.tracks.items[0].name;
         var link_spotify = response.tracks.items[0].external_urls.spotify;
         var album_name = response.tracks.items[0].album.name;
        
         console.log("\n")
         console.log('Artist(s): ' + artist_name);
         console.log('Song: ' + song_name);
         console.log('Link: ' + link_spotify);
         console.log('Album: ' + album_name)
         console.log("\n")
       })
       .catch(function(err) {
          console.log(err);
   
        });  
  }
// Function movieThis

var movieThis = function(){
  var movie = ConcatenateEntry();
  
  movie = movie.join('+');

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

