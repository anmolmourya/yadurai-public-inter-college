const model = require('./user_model')

const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const uri = "";


module.exports = {
    add_user : async function( obj, callback  ){

        //  console.log( obj );
        const userschema = model.userschema;
        const user = mongoose.model('user', userschema);
        const valid_user = await {
            rollno :parseInt( obj.roll_no ),
            name : obj.name,
            father : obj.father,
            village : obj.village,
            contact_1 : parseInt( obj.contact_1 ),
            contact_2 : parseInt( obj.contact_2 ),
            contact_3 : parseInt( obj.contact_3 ),
            password :obj.password
        }

        const client =await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect( async err => {
                if(err) throw err;
                const collection = await client.db("ypic").collection("users");
                const user_inserted =  await collection.insertOne( valid_user );
                console.log( user_inserted.ops )
                client.close();
                callback('user_inserted');
        }); 

    },
    login : async (obj , callback)=> {


        const client =await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            try{

                client.connect( async (err) => {
                    if(err) throw err;
                    console.log('usersb : '+ obj.username)
                    const collection = await client.db("ypic").collection("users");
                    const user = await collection.findOne({rollno : parseInt( obj.username)},{}  );
                    console.log(user)
                
                    if(!user){
                        callback('user not found' , undefined);
                    }
                    else{
                        callback(undefined, user );
                    }
                }); 

            }catch{
                callback('connection error' , undefined );
            }
    }
}
