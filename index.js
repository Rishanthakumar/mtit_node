
module.exports = function() {

    var mysql = require('mysql');

    this.createConnection = function() {

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'supplierclient'
        });

        return connection;
    };

    this.connect = function(connection) {
        connection.connect(function (err) {
            if (err) {
                throw err;
            }
            console.log('You are now connected...');
        });
    };

    this.query = function(connection) {

        connection.query('SELECT * FROM product', function(err, rows, fields) {
            if(!err) {
                console.log('The solution is : ', rows);
            } else {
                console.log('Error while performing query ...');
            }
        });
    };

    this.endConnection = function(connection) {
        connection.end();
    }
};


