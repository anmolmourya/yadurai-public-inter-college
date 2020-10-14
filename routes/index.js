var express = require('express');
var router = express.Router();
var db = require('./../db/db.js');


/* GET home page. */
router.get('/', async function(req, res, next) {



          // testing para for callback 
          db.find(  (error , result)=>{
                if(error){
                    console.log("error : "  + error );
                    res.render('index' , { date : error , post: error });
                    res.end();
                }else{
                   console.log("result : " );
                   console.log(result)
                   res.render('index' , { date : result.date , post: result.notice });
                   res.end();    
                }
          })

          

          //  // just below para is for testing works fine
          // const MongoClient = await require('mongodb').MongoClient;
          // const uri = await "mongodb+srv://YPIC:ypic.user.1@ypic-drytg.mongodb.net/test?retryWrites=true&w=majority";
          // const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
          // client.connect( async ( err ) => {
          //   const collection = await client.db("ypic").collection("notice");
          //   // perform actions on the collection object
          //   var ans = await collection.findOne( {},{ sort:{ '_id' :-1 } }) ;
          //   console.log( ans.post );
          //   console.log( ans.date.getFullYear() )
          //   res.render('index' ,{
          //     date : ans.date.getDate() +"/" + parseInt( ans.date.getMonth() + 1) +"/"+ ans.date.getFullYear() ,
          //     post: ans.post,
          //      } );
          //   res.end();
          //   client.close();
          // });

});

module.exports = router;
