import User from "../Model/user-models.js";
import jwt from "jsonwebtoken";

export const UserRegistration = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ Email: email });

  if (existingUser) {
    res.status(400).json({ message: "User already exists" });
  }

  try {
    const registerUser = await User.create({
      email,
      password,
    });
    res
      .status(201)
      .json({ message: "User registered successfully", data: registerUser });
  } catch (error) {
    console.error("user registration failed", error);
    res.status(500).json({
      message: "User registration failed",
      err: error.message,
    });
  }
};

export const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    if (existingUser.password !== password) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "User logged in successfully",
      token,
      data: existingUser,
    });
  } catch (error) {
    console.error("user login failed", error);
   return res.status(500).json({
      message: "User login failed",
      err: error.message,
    });
  }
};
