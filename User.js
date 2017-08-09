var fs = require('fs');
var Weather = require('./Weather.js');

var User = function(name, location){
    this.name = name;
    this.location = location;
    this.date = new Date();
    this.newUserSearch = function(name, location){
        var tempW = new Weather(name, location);
        console.log(tempW);
        fs.appendFile('log.txt', `NAME: ${name} LOCATION: ${location} DATE: ${this.date.getTime()}\n`)
    }
}

var me = new User("me", "Charlotte, NC");
me.newUserSearch(me.name, me.location);