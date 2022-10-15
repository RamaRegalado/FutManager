var express = require('express');
var router = express.Router();
const{body,}=require("express-validator");
const path = require('path');
const fs=require("fs");


const managerController = require('../controller/controlerManager');

validator= [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('pais').notEmpty().withMessage('Tienes que elegir un país'),
    body('ciudad').notEmpty().withMessage('Tienes que elegir un país'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
 ]
//,(req,res)=>{
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       //return 
//       res.status(400).json({ errors: errors.array() });
//       console.log(errors);
//     }
// }


router.get('/registroManager', managerController.crearLogin);
router.post('/registroManager',validator, managerController.creatpost);
router.get('/loginManager',managerController.login );

module.exports = router;