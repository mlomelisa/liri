# liri
LIRI is an app designed to search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### Overview
LIRI use node.js to run different modules. Each action runs in a separate module, calling to each API.

### Instructions

To be able to run liri you need add a parameter of this list with a value to search:

  * concert-this <band/artist>
  * spotify-this-song <song>
  * movie-this <movie>
  * do-what-it-says
    - Will run the action as follows the text in random.txt

If user decide enter an action witout a value, will search for the default:

  * concert-this **"The Killers"**
  * spotify-this-song **"The Sign"**
  * movie-this **"Reservoir Dogs"**

In case user do not submit any action, by default will run **do-what-it-says**.


### [GitHub](https://github.com/mlomelisa/liri) link

### Technologies

* Node-Spotify-API
* Axios
* Moment
* DotEnv
* fs

### APIs
* OMDB
* Bands In Town
* Spotify

### Log

Saving session in log.txt

### Recorder session using Application
https://drive.google.com/file/d/1kwaOHPwYuVRxl5yigI5K21QIHZak_L47/view
