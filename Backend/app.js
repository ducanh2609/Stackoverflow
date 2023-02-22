const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const session = require('express-session');

const { sessionStore } = require('./utils/db.js')
const app = express();
const upload = multer();
const uploadImage = multer({ dest: './public/image' })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array());
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



app.listen(8000);