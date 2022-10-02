var express = require("express");
var router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/imagenProducto"));
  },

  filename: (res, file, cb) => {
    console.log(file);
    //let newArchivo="images-"+ Date.now() + path.extname(file.originalname);

    cb(
      null,
       "jugador" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

const productController = require('../controller/controlerProduct');

router.get('/formulario', productController.formulario);
router.post('/formulario',upload.any("imagen"),productController.create);
router.get('/manager', productController.manager);
router.get("/deportistas/:id",productController.show);
router.get("/editar/:id",productController.edit);
router.put("/editar/:id",productController.update)

router.get('/delete/:id', productController.destroy);

module.exports = router;