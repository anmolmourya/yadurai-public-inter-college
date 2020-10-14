var express = require('express');
var router = express.Router();
const app = express();
var db = require('./../db/db.js')

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var loggedin = function(req, res, next){
        console.log("login_middleware_authentication_notice.js");
        if(req.isAuthenticated()){
                next()
        }else{
                db.find_many((error , result)=>{
                        var message = "";
                        if(error){
                                console.log('connection error occured');
                                res.render('error', { notice : "no notice for today" , data : result , msg : message });
                                res.end();
                        }else{
                                console.log('result : ');  console.log( result );
                                res.render('notice', { notice : "no notice for today" , data : result , msg : message });
                                res.end();
                        }
                })
        }
}

/* GET home page. */
router.get('/',loggedin, async function(req, res) {
        // res.render('team');
        // res.end();
        
        db.find_many((error , result)=>{
                var message = "";
                if(error){
                        console.log('connection error occured');
                        res.render('error', { notice : "no notice for today" , data : result , msg : message });
                        res.end();
                }else{
                        console.log('result : ');  console.log( result );
                        res.render('notice_form', { notice : "no notice for today" , data : result , msg : message });
                        res.end();
                }
        })
});

router.post('/', async function(req, res, next) {

        var x = await { post: req.body.notice , code : req.body.code , date : (new Date()) };

        if( req.body.code === '9455669074@1461' ){
                var message = "notice inserted successfully";
                await db.add( x ); 
                db.find_many((error , result)=>{
                        //var message = "";
                        if(error){
                                console.log('connection error occured');
                                res.render('notice_form', { notice : "no notice for today" , data : result , msg : message });
                                res.end();
                        }else{
                                console.log('result : ');  console.log( result );
                                res.render('notice_form', { notice : "no notice for today" , data : result , msg : message });
                                res.end();
                        }
                })

        }else{
                var message = await "invalid code";
                db.find_many( (error , result)=>{
                        var message = "invalid code";
                        if(error){
                                console.log('connection error occured');
                                res.render('notice_form', { notice : "no notice for today" , data : result , msg : message });
                                res.end();
                        }else{
                                console.log('result : ');  console.log( result );
                                res.render('notice_form', { notice : "no notice for today" , data : result , msg : message });
                                res.end();
                        }
                })
        }       
});

module.exports = router;