import express from "express";
import { UserRegistration, UserLogin } from "../Controller/user.js";
// import Auth from "../Middleware/auth.js";

export const User_Routes = express.Router();

// post routes
User_Routes.post("/register", UserRegistration);
User_Routes.post("/login", UserLogin);
