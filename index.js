const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config( { path : 'config.env'} )
const dbConn = require('./db');
var cityControllers = require('./controllers/cityController');
dbConn()

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use(cors({ origin: 'http://localhost:4200' }));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Server started at port :http://localhost:3000'));

app.get("", (req, res) => {
    res.send("server is running")})

app.use('/city', cityControllers);

console.log(dbConn);

