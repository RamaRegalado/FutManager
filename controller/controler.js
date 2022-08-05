const { userInfo } = require("os");
const path = require("path");
const fs=require("fs");
const { info } = require("console");
 const productsFilePath = path.join(__dirname, '../data/book.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {
  
  carrito: (req, res) => {
    res.render("carrito");
  },

  postlogin:(req,res)=>{
    let login=[]
    const{ nombre,email,telefono,estatura}=req.body;
    let newlogin = {
      nombre,
      email,
      telefono,
      estatura
    }

    info.push(newlogin);
    
    res.send (login);
  },

// nuevo:(req,res)=>{
// res.render("new-emtry",{info})
// },


  new:(req, res)=>{
console.log(req.body)

// store: (req, res) => {
//   let image
//   console.log(req.files);
//   if(req.files[0] != undefined){
//       image = req.files[0].filename
//   } else {
//       image = 'default-image.png'
//   }
//   let newProduct = {
//       id: products[products.length - 1].id + 1,
//       ...req.body,
//       image: image
//   };
//   products.push(newProduct)
//   fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
//   res.redirect('/');
// }
    // let newinfo={
    //   id: newinfo[newinfo.length -1].id + 1,
    //   ...req.body 
    //  }
    
    //let info=[]
    //const{ nombre,email,telefono,estatura}=req.body;
    
    let newinfo = {
      nombre:req.body.nombre,
      email:req.body.email,
      telefono:req.body.telefono,
      estatura:req.body.estatura,
    }

    let nuevoUsuario=fs.readFileSync("./data/book.json", {encoding :"utf-8"});
    let usuario;
    if(nuevoUsuario==""){
     
      usuario=[];
    }
    else{
        usuario=JSON.parse(nuevoUsuario);
    }

    usuario.push(newinfo);
    
    usuarioJson=JSON.stringify(usuario);
    fs.writeFileSync("./data/book.json",usuarioJson);

    res.render("");
     },

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














//   carrito: (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/carrito.html"));
//   },

//   formulario: (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/formulario.html"));
//   },

//   home: (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/home.html"));
//   },

//   jugador: (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/jugador.html"));
//   },

//   login: (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/login.html"));
//   },
//   nosotros: (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/nosotros.html"));
//   },
//   producto: (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/producto.html"));
//   },
// };

module.exports = mainController;
