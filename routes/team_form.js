var express = require('express');
var router = express.Router();
const app = express();
const db = require('../db/user_db');
const bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
  res.render('team_form',{notice:" "});
  console.log("this is get team page hahahahaha..... ");
  res.end();
});

module.exports = router;
