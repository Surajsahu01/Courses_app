import express from "express"

import {userSignup, userLogin, userLogout } from "../controllers/userController.js";

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);
router.get('/logout',userLogout)

// module.exports = userRouter;
export default router;