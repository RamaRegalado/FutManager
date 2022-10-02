const { userInfo } = require("os");
const path = require("path");
const fs = require("fs");
const { info } = require("console");


const userController = {


    postlogin: (req, res) => {
        let loginFilePath = path.join(__dirname, "../data/userLogin.json");
        let login = JSON.parse(fs.readFileSync(loginFilePath, "utf-8"));
        
        let newuser = {
            id: login[login.length - 1].id + 1,
            ...req.body,
          };
          
          login.push(newuser);
      
          res.send("recived");
      
          //toma un json (info)lo convierte en string
          usuarioJson = JSON.stringify(login);
          //crea el archivo json si no existe o si existe escribe en el,guarda el string(usuarioJson)en book.json
          fs.writeFileSync("./data/userLogin.json", usuarioJson, { encoding: "utf-8" });
        
      },
      login: (req, res) => {
        res.render("login");
      },
};

module.exports = userController;