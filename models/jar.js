const { Double } = require("mongodb") 
const mongoose = require("mongoose") 
const jarSchema = mongoose.Schema({ 
  length:{
    type:Number,
    required:true,
    min:0,
    max:1500
  },
  weight:{
    type:Number,
    required:true,
    min:0,
    max:1500
  },
  height:{
    type:Number,
    required:true,
    min:0,
    max:1500
  }
}) ;
 
module.exports = mongoose.model("jar", jarSchema)