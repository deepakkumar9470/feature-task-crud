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
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Failed to register user" });
  }
};
