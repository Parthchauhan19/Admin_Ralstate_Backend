import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
  inquiryType: { type: String, required: true },
  userType: { type: String, required: true },
  firstName: { type: String, required: true, minlength: 3, maxlength: 8 },
  middleName: { type: String, required: true, minlength: 3, maxlength: 15 },
  email: { type: String, required: true, match: /^\S+@\S+\.\S+$/ },
  location: { type: String, required: true },
  zip: { type: String, required: true, match: /^[0-9]{6}$/ },
  propertyType: { type: String, required: true },
  contactNo: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 15,
    match: /^[0-9]+$/,
  },
  yourMessage: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
}, { timestamps: true });

const Inquiry = mongoose.model("Inquiry", inquirySchema);

export default Inquiry;
