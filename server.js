// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const mongoose = require('mongoose');

const index = require('./server/routes/app');

const setRoutes = require("./server/routes/sets");

mongoose.connect("mongodb+srv://admin:rxK4G8ruhGwrpQzT@cluster0.zxiazbs.mongodb.net/pokemon?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(() => {
        console.log("Connection failed!")
    });


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

// app.use(logger('dev')); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});


app.use(express.static(path.join(__dirname, 'dist/app')));

app.use('/', index);

app.use("/api/sets", setRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/app/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
    console.log('API running on localhost: ' + port)
});
