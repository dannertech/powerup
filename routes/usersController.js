var express = require('express');
var router = express.Router();

const { User } = require('../db/model')

/* GET home page. */
router.get('/', async (req, res) => {
const users = await User.find()
res.send(users)
});

module.exports = router;
