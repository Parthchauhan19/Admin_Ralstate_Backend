// import mongoose from "mongoose";

// const mongoose = require("mongoose");
// const employeeSchema = new mongoose.Schema(
//   {
//     employe: {
//       type: String,
//       required: [true, "Employee name is required"],
//       trim: true,
//       minlength: [2, "Employee name must be at least 2 characters long"],
//       maxlength: [50, "Employee name cannot exceed 50 characters"],
//     },
//     Newvisites: {
//       type: Number,
//       required: [true, "New visits count is required"],
//       min: [0, "New visits cannot be negative"],
//       default: 0,
//     },
//     revisites: {
//       type: Number,
//       required: [true, "Revisits count is required"],
//       min: [0, "Revisits cannot be negative"],
//       default: 0,
//     },
//     Property: {
//       type: Number,
//       required: [true, "Property count is required"],
//       min: [0, "Property count cannot be negative"],
//       default: 0,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     updatedAt: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   {
//     timestamps: true,
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   }
// );

// // Virtual for total visits
// employeeSchema.virtual("totalVisits").get(function () {
//   return this.Newvisites + this.revisites;
// });

// // Pre-save middleware to update the updatedAt field
// employeeSchema.pre("save", function (next) {
//   if (this.isModified() && !this.isNew) {
//     this.updatedAt = Date.now();
//   }
//   next();
// });

// // Index for better query performance
// employeeSchema.index({ employe: 1 });
// employeeSchema.index({ createdAt: -1 });

// module.exports = mongoose.model("Employee", employeeSchema);
