var localStrategy = require('passport-local').Strategy ;
var db = require('../db/admin');

module.exports = function(passport){
    passport.serializeUser(function(user,done){
        console.log("serializing_user_passport.js");
        done(null , user);
    });
    passport.deserializeUser(function(user,done){
        console.log("deserializing_user_passport.js");
        done(null , user);
    });

    passport.use(new localStrategy(
        async function(username, password, done) {
          db.find({ username: username, password:password }, function (err, user) {
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            return done(null, user);
          });
        }
      ));


}