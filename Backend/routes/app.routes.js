const express = require('express');
const router = express.Router();
const { getAllUser, postAllUser } = require('../controllers/app.controllers.js');
const { checkExitsUser, checkExitsLogin, checkSession } = require('../middlewares/user.middlewares.js');
const { delSessionSQL } = require('../models/app.models.js');

// Render Pages
router.post('/', checkSession)

// Log out
router.delete('/logout/:id', async (req, res) => {
    let id = req.params.id
    await delSessionSQL([id])
    res.json({ message: 'Logout successfully' })
})


//User
router.get('/api/v1/user', getAllUser)
router.post('/api/v1/user', checkExitsUser, postAllUser)

router.post('/api/v1/login', checkExitsLogin, async (req, res) => {
    req.session.userId = req.user_id;
    let session_id = req.sessionID
    res.json({ sessionID: session_id })
})






module.exports = router