const path = require("path");

const mainController = {
  
  carrito: (req, res) => {
    res.render("carrito");
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
