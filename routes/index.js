var express = require('express');
var router = express.Router();
const dbSecurity = require("../shared/dbSecurity");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello');
});

router.get('/sendData', dbSecurity.verifyUser, function (req, res, next) {
  /*  Your kind of code logic */
  res.send({
    "Data": "Send Data SuccessFully!"
  });
});


module.exports = router;