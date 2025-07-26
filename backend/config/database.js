import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()


// Database Connection
export const connectDb = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Database Connected Successfully");
    }).catch((error)=>{
        console.log(`Connection Failed ${error}`);
    })
}