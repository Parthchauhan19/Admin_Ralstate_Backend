import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    transactionId: { type: String, required: false, unique: true },
    propertyId: { type: String, required: true },
    propertyTitle: { type: String, required: true },
    type: { type: String, required: true, enum: ["Sale", "Buy", "Rent"] },
    amount: { type: Number, required: true },
    commission: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Completed", "Failed"],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "UPI", "Bank Transfer", "Google Pay", "PhonePe"],
      default: "Cash",
    },
    date: { type: String, required: true },
    buyer: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Transactions = mongoose.model("Transactions", transactionSchema);
export default Transactions;
