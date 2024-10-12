const mongoose=require("mongoose");

const itemSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    country:String,
    message:String
},{timestamps:true});

const itemModel=mongoose.model("Item",itemSchema);
module.exports=itemModel;