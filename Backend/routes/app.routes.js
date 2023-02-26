const express = require('express');
const router = express.Router();
const { getAllUser, postAllUser, postQuestion, getAllQuestion, getUser, getQuestion, updateView, postAnswer, getQuesAnswer, delAnswer, updateAnswer, getCata, updateVoteQues, updateVoteAns, updatePass, forgotPass } = require('../controllers/app.controllers.js');
const { checkExitsUser, checkExitsLogin, checkSession, isAuth } = require('../middlewares/user.middlewares.js');
const { delSessionSQL } = require('../models/app.models.js');

// Render Pages
router.post('/', checkSession, (req, res) => {
    res.send({ message: 'OK' })
})


// Log out
router.delete('/logout/:id', async (req, res) => {
    let id = req.params.id
    await delSessionSQL([id])
    res.json({ message: 'Logout successfully' })
})


//User
router.get('/api/v1/user', getAllUser)
router.get('/api/v1/user/:id', getUser)
router.post('/api/v1/user', checkExitsUser, postAllUser)
router.put('/api/v1/user/changepass/:id', checkSession, updatePass)
router.post('/api/v1/login', checkExitsLogin, async (req, res) => {
    req.session.userId = req.user_id;
    let session_id = req.sessionID;
    res.json({
        sessionID: session_id,
        userId: req.session.userId,
        message: 'Đăng nhập thành công'
    })
})
router.put('/api/v1/user/forgotpass', forgotPass)


// Question / Ask
router.get('/api/v1/question', getAllQuestion)
router.get('/api/v1/question/:id', getQuestion)
router.put('/api/v1/question/:id', checkSession, updateView)
router.put('/api/v1/question/vote/:id', checkSession, updateVoteQues)
router.post('/api/v1/question/ask', postQuestion)


// Answer
router.get('/api/v1/answer/:id', getQuesAnswer)
router.post('/api/v1/answer', checkSession, postAnswer)
router.delete('/api/v1/answer/:id', checkSession, delAnswer)
router.put('/api/v1/answer/:id', checkSession, updateAnswer)
router.put('/api/v1/answer/vote/:id', checkSession, updateVoteAns)


// Tags
router.get('/api/v1/tags', getCata)



module.exports = router