const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const uri = "";


module.exports = {
    add : async function( obj  ){
        const client =await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect( async err => {
                if(err) throw err;
                const collection = await client.db("ypic").collection("notice");
                await collection.insertOne(obj);
                client.close();
        }); 
    },

    
    find : async function( callback ){
        const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
        client.connect( async ( error ) => {
            if(error ){
               client.close();
               return callback('connection failed' , {date : "connection error", notice : "connection error"})
            }else{
                const collection = await client.db("ypic").collection("notice");
                // perform actions on the collection object
                var ans = await collection.findOne( {},{ sort:{ '_id' :-1 } }) ;
                console.log( ans.post );
                console.log( ans.date.getFullYear() );
                client.close();
                callback(undefined,{
                    date : ans.date.getDate() +"/" + parseInt( ans.date.getMonth() + 1) +"/"+ ans.date.getFullYear() ,
                    notice : ans.post,
                });
            }
        });
    },


    find_many : async ( callback )=>{
        const client =await new MongoClient( uri , { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect( async err => {
            if(err){
                client.close();
                return callback('connection error' , undefined );
            }else{
                const collection = await client.db("ypic").collection("notice");
                var note = await collection.find({},{sort:{ '_id':-1 } , limit : 5 }).toArray() ;
                client.close();
                callback( undefined , note );
            }
        });
    },

}
