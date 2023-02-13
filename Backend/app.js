const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');


const app = express();
const upload = multer();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload.array());
app.use(cors());

const appRoutes = require('./routes/app.routes');
app.use('/', appRoutes);

app.listen(8000);