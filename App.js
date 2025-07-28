import express from "express";
import mongoose from "mongoose";
import { User_Routes } from "./Src/Routes/user.js";
import { Property_Routes } from "./Src/Routes/property.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", User_Routes);
app.use("/property", Property_Routes);

app.listen(8000, async () => {
  await mongoose.connect("mongodb://localhost:27017/ochi-admin-backend");
  console.log(`Server running on http://localhost:${8000}`);
});
