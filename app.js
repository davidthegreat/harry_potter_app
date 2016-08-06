var express = require('express');

var app = express();

//Routes

// Home
app.get('/', function(req, res){
	res.send("this is a server response on the home page")
});

// movie_show
app.get('/harry_potter/:part?',function(req, res){
	var part = req.params.part;
	res.send("this is the page for episode " + part);
});

//notFound
app.get('*', function(req,res){
	res.send("This is not the page that you are looking for");
});


app.listen(3000, function(){
	console.log("The application is running in localhost:3000")
})