const router = require('express').Router();
const UsersRouter = require('./api/users.js');
const linksRouter = require('./api/links.js');



router.use('/user', UsersRouter);
router.use('/links', linksRouter);


module.exports = router;