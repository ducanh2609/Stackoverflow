const { db } = require('../utils/db.js');
const mysql = require('mysql2');


module.exports.getAllUserSQL = () => {
    let sql = 'SELECT * FROM user';
    return db.query(sql)
}

module.exports.postAllUserSQL = (arr) => {
    let sql = 'INSERT INTO user VALUES (?,?,?,?,?)';
    return db.query(sql, arr)
}
module.exports.getSession = () => {
    let sql = 'SELECT * FROM sessions';
    return db.query(sql)
}
module.exports.delSessionSQL = (arr) => {
    let sql = 'DELETE FROM sessions WHERE session_id = ?';
    return db.query(sql, arr)
}