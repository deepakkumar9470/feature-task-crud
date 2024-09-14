import express from 'express';
const router = express.Router()
import { getUserProfile, userLogin, userRegistration } from '../controllers/userController.js';
import verifyToken from '../middleware/authorization.js';

// @ /api/user/resister 
router.post('/register',userRegistration);



// @ /api/user/login 
router.post('/login', userLogin);


// @ /api/user/profile 
router.get('/profile',verifyToken,getUserProfile)



// @ /api/user/logout 
router.post('/logout', (req,res)=>{
    console.log("Post")
});

export default router