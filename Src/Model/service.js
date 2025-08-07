import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10,15}$/,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);
export default Service;
