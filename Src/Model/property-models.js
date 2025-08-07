import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    propertyTitle: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      required: true,
      enum: ["Apartment", "House", "Villa", "Condo", "Twonhouse"],
    },
    bedroom: {
      type: Number,
      required: true,
    },
    bathroom: {
      type: Number,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["For Sale", "For Rent", "Sold"],
    },
    agent: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
