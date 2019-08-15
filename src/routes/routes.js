const express = require('express');
const routes = express.Router();

const matchController = require('../controllers/matchController');

routes.get('/', matchController.store);
routes.post('/', matchController.index);

module.exports = routes;
