const { userInfo } = require("os");
const path = require("path");
const fs = require("fs");
const { info } = require("console");


const productsFilePath = path.join(__dirname, "../data/manager.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const userController = {
  
  //crear login por get
  crearLogin: (req, res) => {
    res.render("loginManager");
  },
   //get logearse
   login: (req, res) => {
    res.render("loginManager");
  },

  creatpost: (req, res) => {
  
    let newinfo = {
      id: products[products.length - 1].id + 1,
      ...req.body,  
      // imagen:req.file,
    };
    
    products.push(newinfo);
   
    //toma un json (info)lo convierte en string
    usuarioJson = JSON.stringify(products,null," ");
    
    //crea el archivo json si no existe o si existe escribe en el,guarda el string(usuarioJson)en book.json
    fs.writeFileSync("./data/manager.json", usuarioJson);
    res.render("loginManager");
  },
    
      
};

module.exports = userController;