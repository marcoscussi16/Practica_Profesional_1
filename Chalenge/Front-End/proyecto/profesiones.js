const express= require("express");
const router= express.Router();
const profesionesControlleer= require("./controladorprov.js");
router.get("/",profesionesControlleer.list);
module.exports=router;