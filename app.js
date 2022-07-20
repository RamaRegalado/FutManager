const express = require("express");

const app =express();
const path=require("path")

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));


app.listen(3000, (req, res)=>{
    console.log("Servidor funcionando en http://localhost:3000")
})

const mainRutas = require('./router/main');
app.use('/', mainRutas);

// app.get("/", (req, res)=>{
//     res.sendFile(__dirname + "/views/index.html")
// })

// app.get("/login", (req, res)=>{
//     res.sendFile(__dirname + "/views/login.html")
// })

// app.get("/formulario", (req, res)=>{
//     res.sendFile(__dirname + "/views/formulario.html")
// })

// app.get("/nosotros", (req, res)=>{
//     res.sendFile(__dirname + "/views/nosotros.html")
// })

// app.get("/carrito", (req, res)=>{
//     res.sendFile(__dirname + "/views/carrito.html")
// })

// app.get("/producto", (req, res)=>{
//     res.sendFile(__dirname + "/views/producto.html")
// })

// app.get("/jugador", (req, res)=>{
//     res.sendFile(__dirname + "/views/jugador.html")
// })