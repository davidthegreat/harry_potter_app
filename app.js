var express = require('express');

var app = express();

app.set('view engine', 'ejs');//error if no view engine

var routes = require('./routes')

//Routes

// Home
app.get('/', routes.home);

// movie_show
app.get('/harry_potter/:part?', routes.movie_show);

//notFound
app.get('*', routes.notFound);

app.listen(3000, function(){
	console.log("The application is running in localhost:3000")
})