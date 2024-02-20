const express = require ("express");
const path = require ("path");
const app= express();

app.use (express.static("assets"));

 app.listen(5000,() => {
    console.log ("Servidor corriendo en el puerto 5000");
 } );
 

app.get("/",(req, res)=>{
    res.sendFile(path.resolve("index.html"));
 })