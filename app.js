const express = require("express");

const app =express();
const path=require("path")
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.set("view engine","ejs");


app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));// {extended:false}convierte datos a json
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"public")));


app.listen(3000, (req, res)=>{
    console.log("Servidor funcionando en http://localhost:3000")
})

const mainRutas = require('./router/main');
app.use('/', mainRutas);

