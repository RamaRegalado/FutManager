const { userInfo } = require("os");
const path = require("path");
const fs=require("fs");
const { info } = require("console");
const loginFilePath = path.join(__dirname, '../data/login.json');
const productsFilePath = path.join(__dirname, '../data/book.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const login = JSON.parse(fs.readFileSync(loginFilePath, 'utf-8'));


const mainController = {
  
  carrito: (req, res) => {
    res.render("carrito");
  },

  postlogin:(req,res)=>{
    
    let newLogin = {
  
  id:login[login.length - 1].id + 1,
  
  ...req.body
  
     }
      //añade un dato
      login.push(newLogin)
     
     res.send("recived");
     
     //toma un json (info)lo convierte en string
     usuarioJson=JSON.stringify(login);
     //crea el archivo json si no existe o si existe escribe en el,guarda el string(usuarioJson)en book.json
     fs.writeFileSync("./data/login.json",usuarioJson,{encoding :"utf-8"});
     
    
  },


  new:(req, res)=>{
    
//let info=[]
console.log("PRUEBA")

let newinfo = {

 id:products[products.length - 1].id + 1,
 
...req.body
  
}
 //añade un dato
 products.push(newinfo)

res.send("recived");

//toma un json (info)lo convierte en string
usuarioJson=JSON.stringify(products);
//crea el archivo json si no existe o si existe escribe en el,guarda el string(usuarioJson)en book.json
fs.writeFileSync("./data/book.json",usuarioJson,{encoding :"utf-8"});

},
//const{ nombre,email,telefono,estatura}=req.body;
//let idUser=info;
// let nuevoUsuario=fs.readFileSync("./data/book.json", {encoding :"utf-8"});
//     let usuario;
//     if(nuevoUsuario==""){
     
//       usuario=[];
//     }
//     else{
//         usuario=JSON.stringify(nuevoUsuario);
//     }
   
   //convierte a json un string. los datos que ya estan cargados asi no sobre escribe

//le indico la ruta del archivo json que deseo leer, para leerla con fs y guardar en constate products

//let info = JSON.parse(products);
 //let info= products 

//convierte a json un string. los datos que ya estan cargados asi no sobre escribe
// store: (req, res) => {
//   let image
//   console.log(req.files);
//   if(req.files[0] != undefined){
//       image = req.files[0].filename
//   } else {
//       image = 'default-image.png'
//   }
//   let newProduct = {
//       id: usuarioJson[usuarioJson.length - 1].id + 1,
//       ...req.body,
//       image: image
//   };
//   products.push(newProduct)
//   fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
//   res.redirect('/');
// }
    

  formulario: (req, res) => {
    
    res.render("formulario");
  },

  home: (req, res) => {
    res.render("home");
  },

  jugador: (req, res) => {
    res.render("jugador");
  },

  login: (req, res) => {

    res.render("login");
  },
  nosotros: (req, res) => {
    res.render("nosotros");
  },
  producto: (req, res) => {
    res.render("producto");
  },
};



module.exports = mainController;
