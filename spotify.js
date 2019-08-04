
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

// Function Spotify This Song
 var spotifyThisSong = function() {
  
   var spotify = new Spotify(keys.spotify);
  
   this.songSearch = function(song){

    if (!song) {
     
      song = ['the','sign'];
      song = ('"' + song.join(' ') + '"');
     }
    
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
 }

 module.exports = spotifyThisSong;