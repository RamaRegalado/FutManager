const express = require("express");

const app =express();
const path=require("path")
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const methodOverride = require('method-override');

app.set("view engine","ejs");


app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));// {extended:false}convierte datos a json
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"public")));


app.listen(3001, (req, res)=>{
    console.log("Servidor funcionando en http://localhost:3001")
})

const mainRutas = require('./router/main');
const productRutas= require('./router/productRouter');
const userRutas= require('./router/userRouter');

const multer = require("multer");

app.use('/', mainRutas);
app.use('/', productRutas);
app.use('/', userRutas);

