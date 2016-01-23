var express = require('express');
var router = express.Router();

router.get('/', function(request, response, next) {
	response.render('index', { title: 'Twitter.js', showForm: true})
});

router.get('/movie/:movie_id', function(request, response, next){
	var id = request.params.movie_id;
	var movieData = // get movies.id from DB
	response.render('index', {movie: movieData, subtitle: movie.name, showForm: true})
});

router.get('/director/:director_id', function(request, response, next){
	var id = request.params.director_id;
	var director = // get directors.id from DB
	var subtitle = "Movies directed by " + director.first_name + " " + director.last_name;
	response.render('index', {director: director, subtitle: subtitle, showForm: true})
});

router.get('/actor/:actor_id', function(request, response, next){
	var id = request.params.actor_id;
	var actor = // get actor.id from DB
	var subtitle = "Movies starring " + actor.first_name + " " + actor.last_name;
	response.render('index', {actor: actor, subtitle: subtitle, showForm: true})
});

router.get('/year/:year', function(request, response, next){
	var year = request.params.year;
	var movies = // get movies.id from DB for that year
	var subtitle = "Movies Made in " + year;
	response.render('index', {year: year, subtitle: subtitle, movies: movie, showForm: true})
});

router.post('/search', function(request, response, next){
	var subtitle = "Movies"

	var movie = request.body.movie
	if (movie) { subtitle += " with '" + movie + "' in the name"; }

	var actor = request.body.actor //|| all actors;
	if (actor) { subtitle += " starring " + actor; }

	var director = request.body.director // all directors;
	if (director) { subtitle += " directed by " + director; }

	var year = request.body.year //|| all years;
	if (year) { subtitle += " made in " + year; }

	var movies = // DB.search( movie.name: movie, actor IN movies.actors, movie.director: director, movie.year: year )

	response.render('index', { movies: movies, subtitle: subtitle, actor: actor, director: director, year: year, showForm: true );
});

module.exports = router;