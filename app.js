var express = require('express');
var swig = require('swig');
var app = express();
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

//reset defaults
app.engine('html', swig.renderFile); //app.engine is a function
app.set('view engine', 'html'); //this updates or creates properties on the app.settings object
app.set('views', __dirname + '/views');

//turn off default caching
swig.setDefaults({cache: false});

var server = app.listen(3000);
var io = socketio.listen(server);

// everything in public will be loaded using its path
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', routes(io) );




