import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { User_Routes } from "./Src/Routes/user.js";
import { Property_Routes } from "./Src/Routes/property.js";
import { Analytics_Routes } from "./Src/Routes/analytics.js";
import { PieData_Routes } from "./Src/Routes/piedata.js";
import { TeamMember_Routes } from "./Src/Routes/teammember.js";
import { MessagesRoutes } from "./Src/Routes/messages.js";
import { AllUserRoutes } from "./Src/Routes/alluser.js";
import { TransactionsRoutes } from "./Src/Routes/transactions.js";
import InquiryRoutes from "./Src/Routes/inquiry.js";
import servicerouter from "./Src/Routes/service.js";
import RentalRoutes from "./Src/Routes/rental.js";
import NewsRoutes from "./Src/Routes/news.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/user", User_Routes);
app.use("/property", Property_Routes);
app.use("/analytics", Analytics_Routes);
app.use("/piedata", PieData_Routes);
app.use("/teammember", TeamMember_Routes);
app.use("/messages", MessagesRoutes);
app.use("/alluser", AllUserRoutes);
app.use("/transactions", TransactionsRoutes);
app.use("/inquiry", InquiryRoutes);
app.use("/service", servicerouter);
app.use("/rental", RentalRoutes);
app.use("/news", NewsRoutes);

const PORT = process.env.PORT || 8000;
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://localhost:27017/ochi-admin-backend";

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`✅ Server running at http://localhost:${PORT}`);
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err.message);
  }
});
