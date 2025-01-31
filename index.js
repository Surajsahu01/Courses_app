import express from 'express';

import dotenv from 'dotenv';
import connectDB from './database_connection/db.js';
import courseRouter from './routers/courseRouter.js';
import userRouter from "./routers/userRouter.js"
// import fileUplode from "express-fileupload";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Database Connection
connectDB();

// Routes
app.use('/api/users', userRouter);
app.use('/api/users', courseRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
