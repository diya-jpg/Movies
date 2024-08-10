const moviecontroller=require("../controllers/moviescontrollers");
const express=require("express");
const router=express.Router();
router.get("/",moviecontroller);
router.get("/title/:title",moviecontroller);
router.get("/id/:id",moviecontroller);
module.exports=router;
