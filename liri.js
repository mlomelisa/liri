require("dotenv").config();

var keys = require("./keys.js");
var axios = require('axios');
var moment = require('moment');

var action = process.argv[2];

var concertThis = function() {
  var artist = process.argv[3];

  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming").then(
//axios.get("https://rest.bandsintown.com/artists/the%20rolling%20stones/events?app_id=codingbootcamp&date=upcomming").then(
   function(response) {
     
     data = response.data;
     for(let i=0; i< data.length; i++){
       date = moment(data[i].datetime).format('MM/DD/YYYY')
       console.log(data[i].venue.name + ', ' +data[i].venue.country + ', ' + date)
       
     }
   }
 )

}// ConcertThis function

var spotifyThisSong = function() {
  var spotify = new Spotify(keys.spotify);
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

