const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// const { mongoose } = require('./db');
const dbConn = require('./db');
// console.log("dbConn:"+dbConn)
dbConn()
var cityControllers = require('./controllers/cityController');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server is starting : http://localhost:3000'));

app.use('/city', cityControllers);