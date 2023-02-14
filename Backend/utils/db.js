const mysql = require('mysql2');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ducanh93',
    database: 'stackoverflow',
    multipleStatements: true
})
const db = pool.promise();

const options = {
    host: 'localhost',
    user: 'root',
    password: 'ducanh93',
    database: 'stackoverflow',
    createDatabaseTable: true
};
const sessionStore = new MySQLStore(options);

module.exports = { db: db, sessionStore: sessionStore };