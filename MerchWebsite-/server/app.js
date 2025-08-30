import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import {OrderRouter} from './routes/OrderRoutes.js'
import {userRouter} from './routes/userRoutes.js'
import { productRouter } from './routes/ProductRoutes.js';
import { clubRouter } from './routes/clubRoutes.js';
import { orderItemRouter } from './routes/orderItemRoutes.js';
import { authRouter } from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import paymentRouter from './routes/paymentRoutes.js';
import { protect } from './controllers/authControllers.js';
import cors from "cors";

const prisma = new PrismaClient();
const app = express(); 
app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST", "PUT"],
    credentials: true
}))
dotenv.config(); 

app.use('/order', OrderRouter)
app.use('/users', userRouter)
app.use('/product', productRouter)
app.use('/club', clubRouter)
app.use('/orderItem', orderItemRouter)
app.use('/auth', authRouter)
app.use('/payment', paymentRouter)

export {app, prisma}