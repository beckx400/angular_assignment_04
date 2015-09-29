var express = require('express');
var nouns = require('./public/assets/data/nouns.json');
var adjectives = require('./public/assets/data/adjectives.json');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/views/index.html")
});

app.get("/getNouns", function(req, res){
    res.send(nouns);
});

app.get("/getAdjectives", function(req, res){
    res.send(adjectives);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("listening on port:", port);
});