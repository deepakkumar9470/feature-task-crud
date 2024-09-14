import bcrypt from 'bcrypt';
import generateJwtToken from '../utils/generateJwtToken.js';  
import UserModel from '../models/User.js'; 

/********** User Registration **********/
export const userRegistration = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword
    });

    if (newUser) {
      const token = generateJwtToken(res,newUser._id);

      res.status(201).json({
        message: "User Registered successfully.",
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        token
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }

  } catch (error) {
    res.status(500).json({ message: "Failed to register user" });
  }
};


/********** User Login **********/
export const userLogin = async (req, res) => {
    const { email, password } = req.body;
      if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
  
    try {
      const user = await UserModel.findOne({ email });
        if (!user) {
        return res.status(400).json({ message: "No user found with this email" });
      }
        const isMatchPassword = await bcrypt.compare(password, user.password);
        if (!isMatchPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
        const token = generateJwtToken(res, user._id);
        res.status(200).json({
        message: "User logged in successfully.",
        _id: user._id,
        name: user.name,
        email: user.email,
        token 
      });
  
    } catch (error) {
      res.status(500).json({ message: "Failed to login user" });
    }
  };


/********** Get User Profile  **********/
export const getUserProfile = async (req, res) => {
  const user = await UserModel.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
};
