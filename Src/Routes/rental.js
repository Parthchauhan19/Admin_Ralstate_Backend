import express from "express";
import {
  getRentals,
  createRental,
  updateRental,
  deleteRental,
} from "../Controller/rental.js";

const RentalRoutes = express.Router();

RentalRoutes.get("/getAll", getRentals);
RentalRoutes.post("/create", createRental);
RentalRoutes.put("/update/:id", updateRental);
RentalRoutes.delete("/delete/:id", deleteRental);

export default RentalRoutes;
