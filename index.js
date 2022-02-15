const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const { mongoose } = require('./db');
var cityControllers = require('./controllers/cityController');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({ origin: 'http://localhost:4200' }));

let port = process.env.PORT || 8080;

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/city', cityControllers);