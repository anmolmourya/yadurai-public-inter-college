var loggedin = function(req, res, next){
    console.log("login_middleware_authentication_index.js");
    if(req.isAuthenticated()){
      next()
    }else{
      console.log("middleware_logedin_redirect_")
      res.redirect('/login');
    }
  }

module.exports = loggedin;