import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: "#0001",
    },
    Title: {
      type: String,
      required: true,
    },
    UserGroup: {
      type: String,
      required: true,
      enum: [
        "All Users",
        "New Users",
        "Premium Users",
        "Free Users",
        "Retail Users",
        "Enterprise Users",
        "Frequent Users",
      ],
    },
    City: {
      type: String,
      required: true,
      enum: [
        "City",
        "AllCites",
        "Mumbai",
        "Ahemdabad",
        "Rajkot",
        "Surat",
        "Vadodara",
        "Gandhinagar",
        "Morbi",
        "Gujarat",
      ],
    },
    ActiveFrom: {
      type: Date,
      required: true,
    },
    ActiveUntil: {
      type: Date,
      required: true,
    },
    CreatedAt: {
      type: Date,
      required: true,
    },
    Status: {
      type: String,
      required: true,
      enum: ["Active", "InActive"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Messages = mongoose.model("Messages", messagesSchema);
export default Messages;
