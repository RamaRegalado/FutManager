const fs = require("fs");
const path = require("path");

const userPhat= path.join(__dirname, "./log.txt");

// fs.appendFileSync anexa datos a un archivo

function userlog(req, res,next){

    fs.appendFileSync( userPhat, "el usuario ingreso a la ruta " + req.url+ "\n" );
next();

}

module.exports = userlog;
