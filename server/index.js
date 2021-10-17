import express from "express";
import postRoutes from "./routes/posts.js"
// Deprecated -- import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
// import { CONNECTION_URL, PORT } from "./credentials.js";
import dotenv from 'dotenv'; 


/** Initializing express */

const app = express(); 
dotenv.config(); 



app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors()); 
app.use("/posts", postRoutes); 

app.get('/', (req,res) => {
    res.send("Hello to API of Memories !! ")
}
)

const PORT = process.env.PORT || 5000; 


mongoose.connect(process.env.CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))