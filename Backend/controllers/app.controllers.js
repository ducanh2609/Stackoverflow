const { getAllUserSQL, postAllUserSQL } = require('../models/app.models.js')


module.exports.getAllUser = async (req, res) => {
    let [record] = await getAllUserSQL()
    res.send(record)
}

module.exports.postAllUser = async (req, res) => {
    let [record] = await getAllUserSQL();
    let user_id = record.length + 1;
    let { username, email, password, checkBonus } = req.body;
    let arr = [user_id, username, email, password, checkBonus]
    await postAllUserSQL(arr)
    res.send({ message: 'Post successfully' })
}