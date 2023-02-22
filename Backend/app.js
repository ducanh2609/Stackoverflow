const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const session = require('express-session');
const { uploadProfile } = require('./models/app.models.js');

const { sessionStore } = require('./utils/db.js')
const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/image')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + ".jpeg")
    }
})
app.use(express.static('public'))

const uploadImage = multer({ storage })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const appRoutes = require('./routes/app.routes');

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: 'secret-code',
    store: sessionStore,
    cookie: {
        secure: false,
        // maxAge: 6000
    }
}));

app.use('/', appRoutes);

app.post('/api/v1/profile/:id', uploadImage.single('image'), async function (req, res) {
    let image = `http://localhost:8000/image/${req.file.filename}`;
    let { displayname, address, about } = req.body;
    await uploadProfile([displayname, address, image, about, req.params.id])
    res.redirect(`http://localhost:3000/questions/profile/${req.params.id}`)
});

app.listen(8000);