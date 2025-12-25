import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const dbConnect=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log("Connected to Database✅");
    } catch (error) {
        console.log("Error connecting to Database ❌",error);
    }
}

dbConnect()