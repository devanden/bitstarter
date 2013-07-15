#!/usr/bin/env node
var fs = require('fs');
var express = require('express');

var infile = "index.html";
var buffer = fs.readFileSync(infile);
var in = buffer.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(in);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
