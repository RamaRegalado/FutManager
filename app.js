const express = require("express");
const app = express();

app.use(express.static('public'));

//app.listen(3000, ()=>{
//    console.log('Servidor funcionando');
//});

app.listen(3000, (req, res)=>{
    console.log("Servidor funcionando en http://localhost:3000")
})

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/views/login.html")
})

app.get("/formulario", (req, res)=>{
    res.sendFile(__dirname + "/views/formulario.html")
})
