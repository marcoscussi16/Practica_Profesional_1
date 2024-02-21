const express = require ("express");
const path = require ("path");
const app= express();

app.use (express.static("assets"));

 
const profesiones= require("./profesiones.js")
app.use("/", profesiones);

/*app.get("/",(req, res)=>{
    res.sendFile(path.resolve("index.html"));
 })*/


 app.listen(5000,() => {
   console.log ("Servidor corriendoo en el puerto 5000");
} );