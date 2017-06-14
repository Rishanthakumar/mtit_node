var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');

require('./index.js')();

app.use(cookieParser());
app.use(session({secret: 'secretcode'}));

// views will be find in the views folder
app.set('views', path.join(__dirname, 'views'));
// using jade as template engine
app.set('view engine', 'jade');
// use the public folder as the container for static files like css, image
app.use(express.static(path.join(__dirname, 'public')));


// ---------------------------- Routes ------------------------------------

app.get('/year1', function (req, res) {

    var conn = createConnection();
    connect(conn);
    query(conn);
    endConnection(conn);

    var responseText;

    if (req.session.lastpage) {
        responseText = 'Last page was : ' + req.session.lastpage + '.';
    } else {
        responseText = 'Welcome to Year 1 Home Page';
    }

    req.session.lastpage = '/year1';
    res.send(responseText);
});


app.get('/year2', function (req, res) {
    var responseText;

    if (req.session.lastpage) {
        responseText = 'Last page was : ' + req.session.lastpage + '.';
    } else {
        responseText = 'Welcome to Year 2 Home Page';
    }

    req.session.lastpage = '/year2';
    res.send(responseText);
});

app.get('/year3', function (req, res) {
    var responseText;

    if (req.session.lastpage) {
        responseText = 'Last page was : ' + req.session.lastpage + '.';
    } else {
        responseText = 'Welcome to Year 3 Home Page';
    }

    req.session.lastpage = '/year3';
    res.send(responseText);
});

app.get('/add', function (req, res) {
    res.render('additem');
});


app.listen(3000);
