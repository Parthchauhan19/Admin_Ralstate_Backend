
import express from "express";
import {
  createAnalytics,
  getAllAnalytics,
  getAnalyticsById,
  updateAnalytics,
  deleteAnalytics,
} from "../Controller/analytics.js";

export const Analytics_Routes = express.Router();

Analytics_Routes.post("/create", createAnalytics);
Analytics_Routes.get("/getAll", getAllAnalytics);
Analytics_Routes.get("/:id", getAnalyticsById);
Analytics_Routes.put("/update/:id", updateAnalytics);
Analytics_Routes.delete("/delete/:id", deleteAnalytics);
