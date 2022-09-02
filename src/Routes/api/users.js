const router = require('express').Router();
const UserController = require('../../Controllers/UserController.js');

//const auth = require('/src/Middleware/auth');

router.post('/create', UserController.add);
router.post('/login', UserController.login);

module.exports = router;