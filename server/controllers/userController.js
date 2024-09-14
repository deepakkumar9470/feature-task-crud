import UserModel from '../models/User.js';

export const userRegistration = async (req,res) =>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status(400).json({ message: "Please enter all fields" });  
    }
    try {
        const newUser = await UserModel.create({
            name,
            email,
            password
        })
       await newUser.save();
       res.status(201).json({ message: "User Registered successfully.." });
 
    } catch (error) {
        res.status(500).json({ message: "Failed to user registration" });  
    }
}