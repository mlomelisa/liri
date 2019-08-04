
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var fs = require("fs");

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
        
          var artist_name = response.tracks.items[0].artists[0].name;
          var song_name = response.tracks.items[0].name;
          var link_spotify = response.tracks.items[0].external_urls.spotify;
          var album_name = response.tracks.items[0].album.name;

          var songData = [
            'Artist(s): ' + artist_name,
            'Song: ' + song_name,
            'Link: ' + link_spotify,
            'Album: ' + album_name
          ].join('\n\n');
        
          fs.appendFile('log.txt', songData + '\n-------------\n',
          function(error){
            if (error) {
              throw error;
            }
            console.log(songData)
          });

         
       })
       .catch(function(err) {
          console.log(err);
   
        });  
      }
 }

 module.exports = spotifyThisSong;