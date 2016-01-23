var express = require('express');

module.exports = function(io) {
	var router = express.Router();
	var tweetBank = require('../tweetBank');

	router.get('/', function(request, response, next) {
		var tweets = tweetBank.list();
		response.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true})
	});

	router.get('/users/:id', function(request, response, next){
		var id = '@' + request.params.id;
		var list = tweetBank.find({'id': id});
		var name = list[0].name;
		response.render('index', {title: 'Twitter.js - Posts by ' + name, name: name, id: id, tweets: list, showForm: true})
	});

	router.get('/tweet/:tweetid', function(request,response,next){
		var tweetid = request.params.tweetid;
		var list = tweetBank.find({'tweetid': tweetid});
		if(list.length>0){
			response.render('index', {title: 'Twitter.js - Tweet #' + tweetid, tweets: list});
		}else{
			response.render('index', {title: 'Invalid tweet id', tweets:[]});
		}
	});

	router.post('/tweets', function(request, response, next){
		console.log('inside post handler ', request.body);
		var id = request.body.id;
		var name = request.body.name;
		var text = request.body.text;
		var newTweet = tweetBank.add(id, name, text);
		io.socket.emit('new_tweet', newTweet);
		response.redirect('/');

	})

	

 	return router;
 }