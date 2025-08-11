import mongoose from "mongoose";

const rentalSchema = new mongoose.Schema(
  {
    ownerName: { type: String, required: true },
    rent: { type: String, required: true },
    rentLabel: { type: String, default: "Rent" },
    type: { type: String, required: true },
    area: { type: String },
    location: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Rental = mongoose.model("Rental", rentalSchema);
export default Rental;
