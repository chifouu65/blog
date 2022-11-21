const express = require('express');
const dataBase = require('./utils/db');
const user = require('./routes/user.route');
const path = require('path');
const app = express();
const cors = require('cors');

dataBase();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use("/api/user", user);
//app.use("/api/post", post);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
