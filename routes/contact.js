const express = require('express');
const router = express.Router();
const userdb = require('../db/user_db');
const multer = require('multer');
const bcrypt = require('../bcrypt/bcrypt');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact',{ });
  console.log("this is contact page ");
  res.end();
});

router.post('/',  async function(req, res, next) {
  
        console.log("this is contact page ");
        // below property contains file buffer
        //console.log(req.file.buffer );
        const hashpassword = await bcrypt.hash(req.body.password);
        //console.log(hashpassword);
        req.body.password =await hashpassword  ;

        const user = await req.body ;

        await userdb.add_user( user , (note)=>{
          console.log('entry data ' + note);
          res.render('contact',{ });
          res.end();
        })
    
      },(error, req, res, next ) => {
          res.status(400).send( { error : error.message} );
});


module.exports = router;
