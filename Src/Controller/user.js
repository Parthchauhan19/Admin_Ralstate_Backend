import express from "express";
import mongoose from "mongoose";

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
    res.status(201).json({ user });
  } catch (error) {
    console.error("user registration failed", error);
    res.status(400).json({
      message: "User registration failed",
      err: error.message,
    });
  }
};
