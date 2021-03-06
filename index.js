var express = require('express');
var app = express();
var history = require('connect-history-api-fallback');

var path = require('path');
var serveStatic = require('serve-static');

app.use(history());

app.use(serveStatic(__dirname + "/mdpost/dist"));

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
