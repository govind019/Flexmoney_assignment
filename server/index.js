import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';

import connectDB from './database/db.js';

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(cors({
  origin: 'https://flexmoney-assignment-lime.vercel.app/' || "http://localhost:3000",
  credentials: true, 
}));

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/auth', authRoutes); 
// Use the user routes
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
