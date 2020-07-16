var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rootroot',
  database : 'company_DB'
});
 
connection.connect();
 

module.exports = connection;