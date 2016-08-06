var moviesJSON = require('../movies.json');

exports.home = function(req, res){
	var movies = moviesJSON.movies;

	res.render('home',{
		title: "Harry Potter",
		movies: movies
	});
};

// movie_show
exports.movie_show = function(req, res){
	var part = req.params.part;
	res.send("this is the page for episode " + part);
};

//notFound
exports.notFound = function(req,res){
	res.send("This is not the page that you are looking for");
};