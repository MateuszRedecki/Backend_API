// importuję zmienne środowiskowe
require('dotenv').config();

// importuję expresa
const express = require('express');

// tworzę instancję expresa
const app = express();

// łączę się z bazą danych
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://' +
    process.env.DB_USERNAME +
    ':' +
    process.env.DB_PASSWORD +
    '@cluster0.jivwksh.mongodb.net/library?retryWrites=true&w=majority'
);

// logger
const morgan = require('morgan');
app.use(morgan('combined'));

// parsuję body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// routy
const hotelRoutes = require('./api/routes/hotels');
const userRoutes = require('./api/routes/users');
const houseRoutes = require('./api/routes/houses')
app.use('/hotels', hotelRoutes);
app.use('/users', userRoutes);
app.use('/houses', houseRoutes);

app.use((req, res, next) => {
  res.status(404).json({ wiadomosc: 'Nie znaleziono ' });
});

module.exports = app;
