import mongoose from "mongoose";

const datascheme = new mongoose.Schema(
  {
    firstname : {
      type:String
    },
    lastname :{
      type:String,
    },
    dep:{
      type:String,
    }
  }
)

const userscheme = new mongoose.Schema(
  {
    email:{
      type: String,
      required : true,
    },
    password:{
      type : String,
      required :true,
    },
    company:{
      type:String,
      required : true,
    },
    data:[datascheme],
  },{
    collection : 'user',
    timestamps : true,
  }
)

export default mongoose.model('user',userscheme);

