import express from "express"
import cors from "cors"
import dotenv from "dotenv"

//Database connection
import "./dbConnect.js"

import userRouter from "./controllers/userController.js"

dotenv.config()
const app=express()
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT

app.use("/api",userRouter)
app.get("/", (req, res) => {
    console.log("Popx is running smooth 🚀")
    res.send("Popx backend is running!")
})
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" })
})

app.listen(PORT,()=>{
console.log(`Server running on PORT ${PORT}✅`);
})
