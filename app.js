var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var app = express();
var stylus = require('stylus');
var nib = require('nib');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hjs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware({
      src: __dirname + '/public',
      compile:  function compile(str, path) {
        return stylus(str).use(nib()).set('warn', true)
      }
  }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/decks', routes.decks);
app.get('/decks/:id', routes.deck);
app.get('/decks/:id/:num', routes.slide);
app.get('/prez', routes.prez);
app.get('/prez/:id', routes.pres);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
