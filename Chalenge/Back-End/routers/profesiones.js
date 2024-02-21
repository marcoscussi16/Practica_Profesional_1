const express= require("express");
const router= express.Router();
const profesionesControlleer= require("../controllers/ProfesionesController.js");
router.get("/profesiones",profesionesControlleer.profesiones);
module.exports=router;