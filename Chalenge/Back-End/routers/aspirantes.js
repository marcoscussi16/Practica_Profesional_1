const express= require("express");
const router= express.Router();
const aspirantesController= require("../controllers/AspirantesController.js");
router.get("/aspirantes",aspirantesController.aspirantes);
module.exports=router;