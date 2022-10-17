const { userInfo } = require("os");
const path = require("path");
const fs = require("fs");
const { info } = require("console");
const {  validationResult } = require('express-validator');
 const User = require('../model/User');
 const bcryptjs = require('bcryptjs');
const productsFilePath = path.join(__dirname, "../data/manager.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const userController = {
  
  //crear login por get
  crearLogin: (req, res) => {
    res.render("registroManager");
  },
   
  creatpost: (req, res) => {
   
    let resultValidation = validationResult(req);
   

    if (resultValidation.errors.length > 0) {
			return res.render('registroManager', {
				errors: resultValidation.mapped(),
				old: req.body
			});
		}
  
    
//  desde Aqui    return res.send(resultValidation.mapped());
//     let newinfo = {
//             //id: products[products.length - 1].id + 1,
//             ...req.body,  
//             file: req.file
//           };
          
//           products.push(newinfo);
//           //toma un json (info)lo convierte en string
//           usuarioJson = JSON.stringify(products,null," ");
          
//           //crea el archivo json si no existe o si existe escribe en el,guarda el string(usuarioJson)en book.json
//           fs.writeFileSync("./data/manager.json", usuarioJson);
//           res.redirect("loginManager");
       
      //  else{
        //cualquier cosa que enviemos a la vista viene dentro de un objeto llamado locals
        //con el objeto locals.errors puedo resivir el error en la vista

      //  }

      let userToCreate = {
        ...req.body,
        // password: bcryptjs.hashSync(req.body.password, 10),
        file: req.file
      }
     User.create(userToCreate);

     //res.render("registroManager",{errors:errors.array(),old:req.body
        
     return res.redirect('loginManager');
    
          //
  },


   login: (req, res) => {
    res.render("loginManager");
  }, 
      
};

module.exports = userController;