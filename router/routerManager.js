var express = require('express');
var router = express.Router();
const{ body,check }=require("express-validator");
const path = require('path');
const fs=require("fs");
const multer=require("multer");

const validaraManager=require("../middleware/validacionForManager")
const uploadFile=require("../middleware/multer")


const managerController = require('../controller/controlerManager');




router.get('/registroManager', managerController.crearLogin);
router.post('/registroManager', uploadFile.single('avatar'),validaraManager, managerController.creatpost);
router.get('/loginManager',managerController.login );

module.exports = router;