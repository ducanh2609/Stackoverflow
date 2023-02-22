const { db } = require('../utils/db.js');
const mysql = require('mysql2');


module.exports.getAllUserSQL = () => {
    let sql = 'SELECT t1.user_id, t1.username, t1.email, t1.password, t1.checkBonus, t2.name, t2.address, t2.image, t2.about FROM user as t1, profile as t2 WHERE t1.user_id = t2.user_id';
    return db.query(sql)
}

module.exports.postAllUserSQL = (arr) => {
    let sql = 'INSERT INTO user VALUES (?,?,?,?,?)';
    return db.query(sql, arr)
}
module.exports.postProfile = (arr) => {
    let sql = 'INSERT INTO profile VALUES (?,?,?,?,null)';
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
    let sql = 'SELECT t1.ques_id, t2.name, t2.image, t1.title, t1.code, t1.text, t1.view,t1.vote, t1.time FROM question as t1, profile as t2 WHERE t1.user_id = t2.user_id';
    return db.query(sql)
}
module.exports.postAllQuestionSQL = (arr) => {
    let sql = 'INSERT INTO question VALUES (?,?,?,?,?,?,?,default)';
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
    let sql = 'INSERT INTO catalogy VALUES (?,?,default)';
    return db.query(sql, arr)
}
module.exports.postCataQuesSQL = (arr) => {
    let sql = 'INSERT INTO ques_cata VALUES (?,?)';
    return db.query(sql, arr)
}
module.exports.updateViewSQL = (arr) => {
    let sql = 'UPDATE question SET view = ? WHERE ques_id = ?';
    return db.query(sql, arr)
}
module.exports.getAllAnswerSQL = () => {
    let sql = 'SELECT * FROM answer';
    return db.query(sql)
}
module.exports.getCountAnswerSQL = () => {
    let sql = 'SELECT ques_id, count(ans_id) as answers FROM answer GROUP BY ques_id';
    return db.query(sql)
}
module.exports.getQuesAnswerSQL = (arr) => {
    let sql = 'SELECT t1.ans_id, t1.ques_id, t1.user_id, t2.name, t2.image, t1.content, t1.vote, t1.time FROM answer as t1, profile as t2 WHERE ques_id = ? AND t1.user_id = t2.user_id';
    return db.query(sql, arr)
}

module.exports.postAnswerSQL = (arr) => {
    let sql = 'INSERT INTO answer VALUES (?,?,?,?,?,default)';
    return db.query(sql, arr)
}

module.exports.delAnswerSQL = (arr) => {
    let sql = 'DELETE FROM answer WHERE ans_id = ?';
    return db.query(sql, arr)
}
module.exports.updateAnswerSQL = (arr) => {
    let sql = 'UPDATE answer SET content = ? WHERE ans_id = ?';
    return db.query(sql, arr)
}
module.exports.getCataSQL = (arr) => {
    let sql = 'SELECT * FROM catalogy as t1 JOIN (SELECT cata_id, count(ques_id) as question FROM ques_cata group by cata_id) as t2 WHERE t1.cata_id = t2.cata_id';
    return db.query(sql, arr)
}
module.exports.uploadProfile = (arr) => {
    let sql = 'UPDATE profile SET name = ?, address = ?, image = ?, about = ? WHERE user_id = ?';
    return db.query(sql, arr)
}