var express = require('express');
var app = express();

var path = require('path');

var mysql = require('mysql');

var bodyparser = require('body-parser');

// view will be find in the views folder.
app.set('views', path.join(__dirname, 'views'));

// use the public folder as the container for static file like css, image.
app.use(express.static(path.join(__dirname, 'public')));

// using jade as a template engine.
app.set('view engine', 'jade');

// parses the text as url encoded data
app.use(bodyparser.urlencoded({ extended: false}));

// ------ MySQL DB Connection ----

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Node'
});

connection.connect(function (err) {

    if(err) {
        throw err;
    }

    console.log('You are now connected...');
});

// sample query

connection.query('', function (err, rows, fields) {
   if(!err) {
       console.log();
   } else  {
       console.log();
   }
});

// ------ Routes ---------

app.get('/', function (req, res) {
    connection.query('SELECT * FROM shoppingcart', function (err, rows) {
       res.render('shoppingcart', {items: rows})
    });
});

app.get('/add', function (req, res) {
    res.render('addItem');
});

app.post('/add', function (req,res) {
    var data = {
        itemno: req.body.itemno,
        itemname: req.body.name,
        qty: req.body.qty
    };

    connection.query('INSERT INTO shoppingcart SET ?', data, function (err, rows) {
        if(err) {
            throw err;
        }
    });

    res.redirect('/');

});

app.get('/delete/:id', function (req, res) {
    var tid = req.params.id;

    connection.query('DELETE FROM shoppingcart WHERE itemno = ?', [tid], function (err, rows) {
        if(err)
            console.log('Error deleting : %s', err);
    });

    res.redirect('/');
});

// Register the app
app.listen(3000);

