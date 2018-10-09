var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log("this is the users homepage showing all of the users");
});

module.exports = router;
