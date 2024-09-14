import express from 'express';
const router = express.Router()
import { userRegistration } from '../controllers/userController.js';

// @ /api/user/resister 
router.post('/register',userRegistration);



// @ /api/user/login 
router.post('/login', (req,res)=>{
    console.log("Post")
});


// @ /api/user/profile 
router.get('/profile',(req,res)=>{
    console.log("Post")
})


// @ /api/user/profile/123 
router.put('/profile', (req,res)=>{
    console.log("Post")
})

// @ /api/user/logout 
router.post('/logout', (req,res)=>{
    console.log("Post")
});

export default router