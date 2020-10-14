const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://YPIC:ypic.user.1@ypic-drytg.mongodb.net/test?retryWrites=true&w=majority";


module.exports = {
    find : async function( user, callback ){
        console.log(user);
        if(user.username === "AmitM@1461" && user.password === "Yadurai@1461" ){
            callback(undefined , user);
        }else{
            callback("not found" , undefined);
        }
    }
}
