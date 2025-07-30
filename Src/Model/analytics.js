// analytics.js - Model for bar chart data
import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    employe: {
      type: String,
      required: true,
      unique: true,
    },
    Newvisites: {
      type: Number,
      required: true,
      default: 0,
    },
    revisites: {
      type: Number,
      required: true,
      default: 0,
    },
    Property: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Analytics = mongoose.model("Analytics", analyticsSchema);
export default Analytics;

