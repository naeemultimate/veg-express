const express = require("express");
const router = express.Router();
const veges = require("../controllers/veges")

router.get('/', veges.index) //target all fruits

module.exports = router