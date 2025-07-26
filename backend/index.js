import express from "express"
import dotenv from "dotenv"
import { connectDb } from "./config/database.js"
import AuthRoute from "./routes/auth.route.js"
import cors from "cors"

// Configuration
dotenv.config()
const app = express()
app.use(express.json())

// CORS Origin
app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "https://saylani-final-hackhathone-8u4t.vercel.app"
    ]
}))


// Home Route
app.get("/",(req,res)=>{
    res.send("Hello from Node.js")
})

// Connect the Auth Route
app.use("/auth", AuthRoute);

// Database Connection
connectDb()

// Server Running
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})