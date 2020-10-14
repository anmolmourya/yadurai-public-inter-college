var express = require('express');
var router = express.Router();
//var User = require('../db/User');


module.exports = function(passport){
    console.log('authenticatio_login');
    router.post('/login' ,passport.authenticate('local',{
        failureRedirect : '/team_form',
        successRedirect : '/team'
    }));

    return router;
}