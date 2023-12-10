const House = require('../models/house');

exports.houses_get_all = (req, res, next) => {
  House.find()
    .then((result) => {
      res.status(200).json({
        wiadomosc: 'Lista wszystkich domow prywatnych',
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.houses_add_new = (req, res, next) => {
  const house = new House({
    name: req.body.name,
    country: req.body.country,
    city: req.body.city,
    price: req.body.price,
    owner: req.body.owner,
    telephone: req.body.telephone,
  });
  house
    .save()
    .then((result) => {
      res.status(201).json({
        wiadomosc: 'Dodanie nowego domu prywatnego',
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.house_get_by_id = (req, res, next) => {
  const id = req.params.houseId;
  House.findById(id)
    .then((result) => {
      res.status(200).json({
        wiadomosc: 'Szczegóły domu prywatnego o numerze ' + id,
        info: result,
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.houses_change = (req, res, next) => {
  const id = req.params.houseId;
  const house = {
    name: req.body.name,
    country: req.body.country,
    city: req.body.city,
    price: req.body.price,
    owner: req.body.owner,
    telephone: req.body.telephone,
  };
  House.findByIdAndUpdate(id, house)
    .then(() => {
      res
        .status(200)
        .json({ wiadomosc: 'Zmienono dane domu prywatnego o numerze ' + id });
    })
    .catch((err) => res.status(500).json(err));
};

exports.house_delete = (req, res, next) => {
  const id = req.params.houseId;
  House.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ wiadomosc: 'Usunięto dom prywatny o numerze ' + id });
    })
    .catch((err) => res.status(500).json(err));
};
