const router = require('express').Router();
const linksController = require("../../Controllers/linksController.js")
const auth = require("../../Middleware/auth.js")

router.put('/sendLink', auth.verifyLogin, linksController.update);

module.exports = router;