
var express = require('express');

const mainController = require('../controller/controler');


var router = express.Router();


router.get('/', mainController.home);
router.get('/carrito', mainController.carrito);
router.get('/formulario', mainController.formulario);
router.get('/jugador', mainController.jugador);
router.get('/login', mainController.login);
router.get('/nosotros', mainController.nosotros);
router.get('/producto', mainController.producto);


module.exports = router;