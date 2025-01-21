const express = require("express");
const router = express.Router();
const fruits = require("../controllers/fruits")

router.get('/', fruits.index) //target all fruits

router.get("/:name", fruits.show); //target name to show a fruit

router.post("/", fruits.create); //target all fruits to create a new object

router.patch("/:name", fruits.update);  //target name to update

router.delete("/:name", fruits.destroy); //target name to delete

module.exports = router
