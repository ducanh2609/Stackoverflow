const { db } = require('../utils/db.js');
const mysql = require('mysql2');


module.exports.getAllUserSQL = () => {
    let sql = 'SELECT t1.user_id, t1.username, t1.email, t1.password, t1.checkBonus, t2.name, t2.address, t2.image FROM user as t1, profile as t2 WHERE t1.user_id = t2.user_id';
    return db.query(sql)
}

module.exports.postAllUserSQL = (arr) => {
    let sql = 'INSERT INTO user VALUES (?,?,?,?,?)';
    return db.query(sql, arr)
}
module.exports.postProfile = (arr) => {
    let sql = 'INSERT INTO profile VALUES (?,?,?,?)';
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

module.exports.getAllQuestionSQL = () => {
    let sql = 'SELECT * FROM question';
    return db.query(sql)
}
module.exports.postAllQuestionSQL = (arr) => {
    let sql = 'INSERT INTO question VALUES (?,?,?,?,?,?,?)';
    return db.query(sql, arr)
}
module.exports.getCatalogySQL = (arr) => {
    let sql = 'SELECT * FROM catalogy';
    return db.query(sql, arr)
}
module.exports.getCataQuesSQL = (arr) => {
    let sql = 'SELECT t1.ques_id, t2.cata_name FROM ques_cata as t1, catalogy as t2 WHERE t1.cata_id = t2.cata_id';
    return db.query(sql, arr)
}

module.exports.postCatalogySQL = (arr) => {
    let sql = 'INSERT INTO catalogy VALUES (?,?)';
    return db.query(sql, arr)
}
module.exports.postCataQuesSQL = (arr) => {
    let sql = 'INSERT INTO ques_cata VALUES (?,?)';
    return db.query(sql, arr)
}