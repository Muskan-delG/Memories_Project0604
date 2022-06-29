import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'; 
import userRouter from "./routes/user.js";
const app=express();
dotenv.config();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes);
app.use("/user", userRouter);
//const CONNECTION_URL = 'mongodb+srv://muskanmehta0604:muskanmehta123@cluster0.hhwan.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>
{
    res.send('APP IS RUNNING');
});
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=>console.log(`Server running on port:${PORT}`)))
    .catch((error)=> console.log(error.message));

//mongoose.set('useFindAndModify',false);