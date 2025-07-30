// pieData.js - Model for pie chart data
import mongoose from "mongoose";

const pieDataSchema = new mongoose.Schema(
  {
    employe: {
      type: String,
      required: true,
      unique: true,
    },
    House: {
      type: Number,
      required: true,
      default: 0,
    },
    Tenaments: {
      type: Number,
      required: true,
      default: 0,
    },
    Rental: {
      type: Number,
      required: true,
      default: 0,
    },
    Commercial: {
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

const PieData = mongoose.model("PieData", pieDataSchema);
export default PieData;
