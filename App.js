import express from "express";
import mongoose from "mongoose";

const App = express();
App.use(express.json());

App.get("/", (req, res) => {
  res.send("API is running successfully");
});

App.listen(8000, async () => {
  await mongoose.connect("mongodb://localhost:27017/ochi-admin-backend");
  console.log(`Server running on http://localhost:${8000}`);
});
