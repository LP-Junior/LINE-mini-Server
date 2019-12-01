var mysql      = require('mysql');
var dbConfig = mysql.createConnection({
  host     : 'line-mini-db.cvombkhn014x.ap-northeast-2.rds.amazonaws.com',
  user     : 'lpjunior',
  password : 'linepay123!'
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