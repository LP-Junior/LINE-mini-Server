var mysql = require('mysql');
// var mysql = require('promise-mysql');

var dbConfig = mysql.createConnection({
  host     : 'line-mini-db.cvombkhn014x.ap-northeast-2.rds.amazonaws.com',
  port     : '3306',
  user     : 'lpjunior',
  password : 'linepay123!',
  database : 'LINEPaymini'
});


module.exports = mysql.createPool(dbConfig);


/*
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
*/