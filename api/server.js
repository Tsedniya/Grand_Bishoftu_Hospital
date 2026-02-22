import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js'
import bookRoutes from './routes/book.route.js'
import cookieParser from 'cookie-parser';
import cors from "cors";
dotenv.config()



mongoose.connect(process.env.MONGO).then(() =>{
    console.log('connect mongoose')
}).catch((err) =>{
    console.log(err)
})
const app = express()

app.use(
  cors({
    origin: "http://localhost:5174", // your frontend
    credentials: true
  })
);
app.use(express.json())
app.use(cookieParser());


app.use('/api/auth', authRoutes) 
app.use('/api/book', bookRoutes) 


app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  });
})

app.listen(3000, () => {
    console.log('server is running on port 3000!!')
})