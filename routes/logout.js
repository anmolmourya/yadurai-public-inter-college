var express = require('express');
var router = express.Router();


/*  GET home page....  */
router.get('/', function(req, res, next) {
  req.logout();
  console.log("this is logout page ");
  res.redirect('/');
  res.end();
});


module.exports = router ;