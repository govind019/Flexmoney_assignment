import express from 'express';
import { getUserById, updateUser } from '../controllers/userControllers.js';

const router = express.Router();

// Route to fetch a specific user by ID
router.get('/:id', getUserById);
router.post('/:id', updateUser);

export default router;
