const express = require("express");
const router = express.Router();
const searchCtrl = require("../../controllers/search");

router.get("/", searchCtrl.getImages)

module.exports = router;