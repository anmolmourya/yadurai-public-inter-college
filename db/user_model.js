var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userschema = new Schema({
      roll_no : {
          type : Number ,
          required : true,
      },
      name : {
          type : String,
          required :true
      },
      father : {
        type : String,
        required :true
      },
      village : {
        type : String,
        required :true
      },
      contact_1 : {
        type : Number,
        required :true
      },
      contact_2 : Number,
      contact_3 : Number
  });

  
module.exports.userschema = userschema ;