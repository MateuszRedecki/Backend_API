
require('dotenv').config();


const express = require('express');


const app = express();


const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://' +
    process.env.DB_USERNAME +
    ':' +
    process.env.DB_PASSWORD +
    '@cluster0.jivwksh.mongodb.net/library?retryWrites=true&w=majority'
);


const morgan = require('morgan');
app.use(morgan('combined'));


const bodyParser = require('body-parser');
app.use(bodyParser.json());

// routes
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
