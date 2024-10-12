const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(
            "mongodb+srv://mayan:vishnuvardhan@cluster0.fcyrp.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("connected to database");
    }catch(err){
        console.log(err);
    }
};

module.exports=connectDB;