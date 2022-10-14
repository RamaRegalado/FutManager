var express = require('express');
var router = express.Router();
// const multer= require("multer");
const path = require('path');
const fs=require("fs");
//const validations = require('../validator/validateManager');

// const storage= multer.diskStorage({

//     destination:(res,file,cb)=>{

// cb(null,path.join(__dirname, "public/images/imagenPerfil"))

//     },

//     filename:(res,file,cb)=>{
//            console.log(file)
//         //let newArchivo="images-"+ Date.now() + path.extname(file.originalname);

//         cb(null, file.filename + "-" + Date.now() + path.extname(file.originalname) )
//     }

//  })

//  const upload=multer({storage:storage})

const managerController = require('../controller/controlerManager');



router.get('/registroManager', managerController.crearLogin);
router.post('/registroManager', managerController.creatpost);
router.get('/loginManager',managerController.login );

module.exports = router;