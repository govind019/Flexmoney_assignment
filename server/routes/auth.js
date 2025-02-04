import express from "express";
import { login,logout,signup } from "../controllers/authControllers.js";
const router = express.Router();

// POST: Signup a new user
router.post('/signup',signup);
// POST: Login a user
router.post('/login',login);
// POST: Logout a user
router.post('/logout',logout);

export default router;