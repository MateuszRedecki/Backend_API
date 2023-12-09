const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');


const House = require('../models/house');

const HouseController = require('../controllers/houses');

router.get('/', HouseController.houses_get_all);

router.post('/', checkAuth, HouseController.houses_add_new);

router.get('/:houseId', HouseController.house_get_by_id);

router.put('/:houseId', checkAuth, HouseController.houses_change);

router.delete('/:houseId', checkAuth, HouseController.house_delete);

module.exports = router;
