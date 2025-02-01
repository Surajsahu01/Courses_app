import express from 'express';
import multer from 'multer';

import { addUser, buyCourse, courseDetails, deletCourse, getAllUsers, updateCourse} from '../controllers/courseController.js';

const router = express.Router();
// Multer configuration for file uploads
const upload = multer({
    dest: 'uploads/', // Temporary folder to store files
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// Apply multer to the route
router.post('/add-user', upload.single('image'), addUser);
router.get('/show', getAllUsers);
router.put('/update/:courseId', updateCourse);
router.delete('/delete/:courseId', deletCourse);
router.get('/show/:courseId', courseDetails);

router.post("/buy/:courseId", buyCourse)
export default router;
