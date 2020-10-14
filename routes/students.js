var express = require('express');
var router = express.Router();


/*  GET home page....  */
router.get('/', function(req, res, next) {
  res.render('students',{notice:"no notice" });
  console.log("this is student page ");
  res.end();
});


module.exports = router ;