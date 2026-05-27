import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    // validation
    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // prevent admin signup
    if (role === "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin registration not allowed"
      });
    }

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};