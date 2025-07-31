import mongoose from "mongoose";

const alluserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, required: true },
    avatar: { type: String, required: true },
    joinDate: { type: String, required: true },
    lastLogin: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AllUser = mongoose.model("AllUser", alluserSchema);
export default AllUser;
