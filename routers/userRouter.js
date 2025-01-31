import express from "express"

import {userSignup, userLogin } from "../controllers/userController.js";

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

// module.exports = userRouter;
export default router;