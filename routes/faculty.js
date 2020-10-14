var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('faculty',{ });
  console.log("this is faculty page ");
  res.end();
});


module.exports = router;
