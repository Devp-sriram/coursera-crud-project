import mongoose from "mongoose";

const userscheme = new mongoose.Schema({
  name:{
    type: String,
    required : true,
  },
  password:{
    type : String,
    required :true,
  }
  },{
    collection : 'user',
    timestamps : true,
  }
)

module.exports = mongoose.model('user',userscheme);

