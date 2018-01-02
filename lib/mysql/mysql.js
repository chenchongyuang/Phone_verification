const mysql = require('mysql');

const Q = require('q');

let connect = mysql.createConnection(config.mysqlOption);

connect.connect();

exports.query = function(sql){
    return Q.ninvoke(connect,'query',sql);
}