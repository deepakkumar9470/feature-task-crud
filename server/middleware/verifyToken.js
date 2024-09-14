import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';

const verifyToken = async (req,res,next) =>{

    let token;
    token = req.cookies.jwttoken;

    if(!token){
        res.status(400).json({message : "User not authorized"})
    }

    const decode = jwt.verify(token,process.env.JWT_TOKEN,{expiresIn:'30d'});
    console.log(decode)
    req.user =  UserModel.findById(decode.userId).select('-password')
    next()
}

export default verifyToken;