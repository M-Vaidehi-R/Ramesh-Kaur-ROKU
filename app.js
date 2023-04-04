// var createError = require('http-errors');
// var express = require('express');

// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();
// const port = process.env.PORT || 3000;

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });


// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/views/index.html');
// });

// app.use('/ums', require('./routes/index.js'));

// app.listen(port, ()=> {
//   console.log(`app is running on ${port}`);
// });

// // The first route handler app.get('/', (req, res) => { ... }) is responsible for serving the homepage of the web application. When a user visits the root URL (i.e., the homepage), the server sends back the index.html file located in the /views directory.

// // The second route handler app.use('/ums', require('./routes/index.js')) sets up a middleware that routes all incoming HTTP requests starting with the /ums prefix to the index.js file located in the /routes directory. This file contains additional route handlers that handle requests related to the User Management System (UMS).

// // Finally, the server listens on the specified port using app.listen(port, ()=> { ... }) and logs a message to the console indicating that the server is running.

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;


const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.use('/ums', require('./routes/index.js'));

app.listen(port, ()=> {
    console.log(`app is running on ${port}`);
})