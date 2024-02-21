const express = require ("express");
const path = require ("path"); 
const methodOverride= require("method-override")
const app= express();
const publicPath = path.resolve (__dirname, "./public");
const session = require ("express-session");


const profesiones= require("./routers/profesiones.js")
const aspirantes= require("./routers/aspirantes.js")

app.use(methodOverride("_method"))

app.use("/", aspirantes);
app.use("/", profesiones);

app.listen(3000,() => {
    console.log ("Servidor corriendoo en el puerto 3000");
 } );