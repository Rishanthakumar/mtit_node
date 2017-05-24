var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');

require('./index.js')();

app.use(cookieParser());
app.use(session({secret: 'secretcode'}));

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

app.listen(3000);
