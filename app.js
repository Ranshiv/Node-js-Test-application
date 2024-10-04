var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var aboutRouter = require('./routes/about');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const hbs = require('hbs');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/about', aboutRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    // Log the missing route for debugging
    console.error(`404 Not Found: ${req.method} ${req.originalUrl}`);
    
    // Create a 404 error with a custom message
    next(createError(404, 'The page you are looking for does not exist.'));
});

// Error handler
app.use(function (err, req, res, next) {
    // Log the error for debugging
    console.error(`Error occurred: ${err.message}`);

    // Set locals, only providing error details in development mode
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
