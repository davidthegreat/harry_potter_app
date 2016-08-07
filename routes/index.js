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
	var movies = moviesJSON.movies;
	var part = req.params.part;

	if (part >=1 && part <= 6){
		var movie = movies[part - 1];
		var title = movie.title;
		var main_characters = movie.main_characters
		res.render('movie_show', {
			movies: movies,
			title: title,
			movie: movie,
			main_characters: main_characters
		
	});

	}else {
		res.render('notFound', {
			movies: movies,
			title: 'This is not the page you are looking for'
		});
	}


};

//notFound
exports.notFound = function(req,res){
	var movies = moviesJSON.movies;
	res.render('notFound', {
			movies: movies,
			title: 'This is not the page you are looking for'
		});
};