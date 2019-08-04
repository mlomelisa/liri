

var keys = require("./keys.js");
var moment = require('moment');
var axios = require('axios');
var fs = require("fs");


// Function ConcertThis
var concertThis = function() {


  this.concertSearch = function(artist) {

    if (!artist) {
    
      artist = ['The','Killers'];
      artist = artist.join('%20');
      
    } 

   var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming";
   axios.get(URL).then(
    function(response) {
     
     data = response.data;
     var concertData = [];
     console.log('Next Events: ')
     for(let i=0; i< data.length; i++){
       date = moment(data[i].datetime).format('MM/DD/YYYY')
       console.log(data[i].venue.name + ', ' +data[i].venue.country + ', ' + date)
       
       concertData = data[i].venue.name + ', ' +data[i].venue.country + ', ' + date;

       fs.appendFile('log.txt', concertData + '\n------------\n',
       function(error){
         if (error) {
           throw error;
         }
       
       });
     }
   
     

   }
 )
}




}// ConcertThis function

module.exports = concertThis;
