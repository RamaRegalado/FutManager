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

const userController = require('../controller/controlerUser');

router.get('/login', userController.login);
router.post('/login', userController.postlogin);//upload.any(),

module.exports = router;