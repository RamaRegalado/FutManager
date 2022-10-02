const { userInfo } = require("os");
const path = require("path");
const fs = require("fs");
const { info } = require("console");


const mainController = {
  carrito: (req, res) => {
    res.render("carrito");
  },

  home: (req, res) => {
    res.render("home");
  },

  jugador: (req, res) => {
    res.render("deportistas");
  },

  nosotros: (req, res) => {
    res.render("nosotros");
  },
  producto: (req, res) => {
    res.render("producto");
  },
};

module.exports = mainController;
