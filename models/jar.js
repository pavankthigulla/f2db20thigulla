const mongoose = require("mongoose") 
const jarSchema = mongoose.Schema({ 
 length: Number, 
 weight: Number, 
 height: Number 
}) 
 
module.exports = mongoose.model("jar", 
jarSchema) 