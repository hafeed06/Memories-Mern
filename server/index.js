import express from "express";
import postRoutes from "./routes/posts.js"
// Deprecated -- import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

/** Initializing express */

const app = express(); 



app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors()); 
app.use("/posts", postRoutes); 

const CONNECTION_URL = "mongodb+srv://hafeed06:hafeed1999@cluster0.rsnpv.mongodb.net/cluster0?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: PORT`)))
.catch((error) => console.log(error.message))