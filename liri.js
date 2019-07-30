require("dotenv").config();

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var axios = require('axios');



var action = process.argv[2];

var concertThis = function() {
  var artist = process.argv[3];

 axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
   function(response) {
     console.log(response.data.venue)
   }
 )

}


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

