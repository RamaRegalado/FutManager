
var express = require('express');
var router = express.Router();
const multer= require("multer");
const path = require('path');
const fs=require("fs")

const storage= multer.diskStorage({

    destination:(res,file,cb)=>{

cb(null,path.join(__dirname, "public/images/imagenPerfil"))

    },

    filename:(res,file,cb)=>{
           console.log(file)
        //let newArchivo="images-"+ Date.now() + path.extname(file.originalname);

        cb(null, file.filename + "-" + Date.now() + path.extname(file.originalname) )
    }

 })


 const upload=multer({storage:storage})

const mainController = require('../controller/controler');
router.get('/', mainController.home);
router.get('/carrito', mainController.carrito);
router.get("new-entry")
//router.post('/new-entry',mainController.new);

router.get('/formulario', mainController.formulario);
router.post('/formulario',upload.any(),mainController.new)

router.get('/jugador', mainController.jugador);
router.get('/login', mainController.login);
// router.post('/login',upload.single("imagen-perfil"), mainController. postlogin);

router.get('/nosotros', mainController.nosotros);
router.get('/producto', mainController.producto);

//
module.exports = router;