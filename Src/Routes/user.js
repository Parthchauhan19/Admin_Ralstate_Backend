import express from "express";
import { UserLogin, UserRegistration } from "../Controller/user.js";

export const User_Routes = express.Router();

// post routes
User_Routes.post("/register", UserRegistration);
User_Routes.post("/login", UserLogin);



//env variables
// MONGO_URI=mongodb+srv://ParthChauhan:parth198@backend.uebejpl.mongodb.net/OCHI-ADMIN-BACKEND
// PORT=8000
// JWT_SECRET="admin123"
