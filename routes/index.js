exports.home = function(req, res){
	res.render('home',{
		title: "Harry Potter",
		movies: ["first","second","third"]
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