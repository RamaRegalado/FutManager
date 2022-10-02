const { userInfo } = require("os");
const path = require("path");
const fs = require("fs");
const { info } = require("console");

const productsFilePath = path.join(__dirname, "../data/producto.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));


const productController = {

formulario: (req, res) => {
    res.render("formulario");
  },  
  

    create: (req, res) => {
        let newinfo = {
          id: products[products.length - 1].id + 1,
          ...req.body,  
          imagen:req.file
        };
        
        products.push(newinfo);
        res.redirect("manager");
        //toma un json (info)lo convierte en string
        usuarioJson = JSON.stringify(products);
        //crea el archivo json si no existe o si existe escribe en el,guarda el string(usuarioJson)en book.json
        fs.writeFileSync("./data/producto.json", usuarioJson, { encoding: "utf-8" });
      },
      manager: (req, res) => {
        res.render("manager",{products});
      },  
      edit: (req, res) => {
        
        let editar = products.find(moto=> moto.id == req.params.id);


        res.render("editar",{editar});
      },  
      show: (req,res) =>{
       
        let description;
        products.forEach(element => {
            if(element.id == req.params.id){
                description = element;
            }
        }); res.render("deportistas",{description});
        
    },
    update: (req,res) =>{
      
      req.body.id = req.params.id;
      //req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
      let jugadorUpdate = products.map(element =>{
          if(element.id == req.body.id){
              return element = req.body;
          }
          return moto;
      })
      let actualizar = JSON.stringify(jugadorUpdate,null,2);
      fs.writeFileSync(path.resolve(__dirname,'../data/producto.json'),actualizar)
      res.redirect('/manager');
  },

  destroy: (req,res) =>{
    
    const deleteId = req.params.id;
    const datosFinal = products.filter(element => element.id != deleteId);
    let jugadorGuardar = JSON.stringify(datosFinal,null,2)
    fs.writeFileSync(path.resolve(__dirname, '../data/producto.json'),jugadorGuardar);
    res.redirect('/manager');
}
   
   
}

module.exports = productController;