const Hotel = require('../models/hotel');

exports.hotels_get_all = (req, res, next) => {
  Hotel.find()
    .then((result) => {
      res.status(200).json({
        wiadomosc: 'Lista wszystkich hoteli',
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.hotels_add_new = (req, res, next) => {
  const hotel = new Hotel({
    name: req.body.name,
    country: req.body.country,
    city: req.body.city,
    price: req.body.price,
  });
  hotel
    .save()
    .then((result) => {
      res.status(201).json({
        wiadomosc: 'Dodanie nowego hotelu',
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.hotels_get_by_id = (req, res, next) => {
  const id = req.params.bookId;
  Hotel.findById(id)
    .then((result) => {
      res.status(200).json({
        wiadomosc: 'Szczegóły hotelu o numerze ' + id,
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.hotels_change = (req, res, next) => {
  const id = req.params.hotelId;
  const hotel = {
    name: req.body.name,
    country: req.body.country,
    city: req.body.city,
    price: req.body.price,
  };
  Hotel.findByIdAndUpdate(id, hotel)
    .then(() => {
      res
        .status(200)
        .json({ wiadomosc: 'Zmienono dane hotelu o numerze ' + id });
    })
    .catch((err) => res.status(500).json(err));
};

exports.hotel_delete = (req, res, next) => {
  const id = req.params.hotelId;
  Hotel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ wiadomosc: 'Usunięto hotel o numerze ' + id });
    })
    .catch((err) => res.status(500).json(err));
};
