const { userInfo } = require("os");
const path = require("path");
const fs = require("fs");
const { info } = require("console");

const productsFilePath = path.join(__dirname, "../data/producto.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, null, " ", "utf-8"));


const productController = {

formulario: (req, res) => {
    res.render("formularioDeportista");
  },  
  

    createDeportista: (req, res) => {
        let newinfo = {
          id: products[products.length - 1].id + 1,
          ...req.body,  
          imagen:req.file,
        };
        
        products.push(newinfo);
        res.redirect("manager");
        //toma un json (info)lo convierte en string { encoding: "utf-8" }
        usuarioJson = JSON.stringify(products);
        //crea el archivo json si no existe o si existe escribe en el,guarda el string(usuarioJson)en book.json
        fs.writeFileSync("./data/producto.json", usuarioJson,null," " ,);
      },
      manager: (req, res) => {
        res.render("manager",{products});
      },  
      edit: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let editar = products.find(element=> element.id == req.params.id);
        console.log(editar)
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
    
      update: (req, res) => {
        
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id)
      
        productToEdit = {
          id: productToEdit.id,
          ...req.body,
          
        };console.log(productToEdit);
     
        
        let newProducts = products.map(product => {
          if (product.id == productToEdit.id) {
            return product = {...productToEdit};
          }
          return product;
        })
      
    
        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
        res.redirect('/manager');
      

      // let actualizar = JSON.stringify(jugadorUpdate );
      // console.log(actualizar);
      // fs.writeFileSync(path.join(__dirname,'../data/producto.json'),actualizar)
      // res.redirect('/manager');
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