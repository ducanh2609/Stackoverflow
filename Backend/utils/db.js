const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ducanh93',
    database: 'stackoverflow',
    multipleStatements: true
})
const db = pool.promise();

module.exports.db = db;