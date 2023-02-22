const { getAllUserSQL, getSession } = require("../models/app.models");


module.exports.checkExitsUser = async (req, res, next) => {
    let [record] = await getAllUserSQL();
    let checkUser = record.filter((item) => item.username === req.body.username)
    let checkEmail = record.filter((item) => item.email === req.body.email)
    if (checkEmail.length === 0 && checkUser.length === 0) next()
    else {
        if (checkUser.length !== 0) {
            res.send({ message: 'Tài khoản đã tồn tại' })
        } else {
            res.send({ message: 'Email đã tồn tại' })
        }
    }
}

module.exports.checkExitsLogin = async (req, res, next) => {
    let [record] = await getAllUserSQL();
    let checkEmail = record.find((item) => item.email === req.body.email)
    if (checkEmail === undefined) res.send({ message: 'Tài khoản không tồn tại' })
    else if (checkEmail.password != req.body.password) res.send({ message: 'Sai mật khẩu' })
    else {
        req.user_id = checkEmail.user_id;
        next()
    }
}


module.exports.checkSession = async (req, res) => {
    let [record] = await getSession();
    let checkSession = record.find((item) => item.session_id == req.body.sessionID)
    if (checkSession === undefined) res.send({ message: 'Not Session' })
    else res.send({ message: 'OK' })
}