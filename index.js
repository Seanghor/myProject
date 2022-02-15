const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const dbConn = require('./db');
var cityControllers = require('./controllers/cityController');
dbConn()

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors({ origin: 'http://localhost:4200' }));


app.listen(3000, () => console.log('Server started at port :http://localhost:3000'));

app.use('/city', cityControllers);

console.log(dbConn);