import express from "express";
import {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "../Controller/property.js";

export const Property_Routes = express.Router();

// CRUD routes
Property_Routes.post("/create", createProperty);
Property_Routes.get("/getAll", getAllProperties);
Property_Routes.get("/:id", getPropertyById);
Property_Routes.put("/update/:id", updateProperty);
Property_Routes.delete("/delete/:id", deleteProperty);
