var weather = require('weather-js');

var Weather = function(name, location){
    this.name = name;
    this.location = location;
    this.getWeather(this.location);
}

Weather.prototype.getWeather = function(location){
    weather.find({search: location, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        
       return JSON.stringify(result, null, 2);
    });
}

module.exports = Weather;

new Weather("Me", "Apex, NC")