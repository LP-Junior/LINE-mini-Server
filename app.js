//var createError = require('http-errors');
var express = require('express')
var app = express()
var port = 3000
var routes = require('./routes/routes')

app.use('/', routes);
routes.initialize(app);

app.listen(port, function() {
  return console.log(`Example app listening on port ${port}!`)
})

module.exports = app;

/*
app.use('/', routes);

// error handler
require('./errorhandler')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/