const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');

// importuję model książki
const Hotel = require('../models/hotel');

const HotelController = require('../controllers/hotels');

router.get('/', HotelController.hotels_get_all);

router.post('/', checkAuth, HotelController.hotels_add_new);

router.get('/:hotelId', HotelController.hotels_get_by_id);

router.put('/:hotelId', checkAuth, HotelController.hotels_change);

router.delete('/:hotelId', checkAuth, HotelController.hotel_delete);

module.exports = router;
