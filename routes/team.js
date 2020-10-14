var express = require('express');
var router = express.Router();
const app = express();
const db = require('../db/user_db');
const bcrypt = require('bcrypt');

var loggedin = function(req, res, next){
        console.log("login_middleware_authentication_team.js");
        if(req.isAuthenticated()){
          next()
        }else{
          console.log("middleware_logedin_redirect_")
          res.render('team_form',{notice:" "});
        }
}

router.get('/',loggedin, function(req, res, next) {
  res.render('team',{notice:" "});
  console.log("this is get team page hahahahaha..... ");
  res.end();
});

module.exports = router;
