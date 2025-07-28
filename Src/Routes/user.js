import express from "express";
import { UserLogin, UserRegistration } from "../Controller/user.js";


export const User_Routes = express.Router();

// post routes
User_Routes.post("/register", UserRegistration);
User_Routes.post("/login", UserLogin);
