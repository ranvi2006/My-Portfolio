
const mongoose=require("mongoose");
async function connectDB(){
    try{
        // console.log(process.env.MONGO_URL);
  await mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database Connected");
  });

    }catch(err)
    {
        console.log("Data Base not connected");
        console.log(err);
    }
}

connectDB();

module.exports="raju";