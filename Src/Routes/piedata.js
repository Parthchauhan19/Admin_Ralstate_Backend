// pieDataRoutes.js
import express from "express";
import {
  createPieData,
  getAllPieData,
  getPieDataByEmployee,
  updatePieData,
  deletePieData,
} from "../Controller/piedata.js";

export const PieData_Routes = express.Router();

PieData_Routes.post("/create", createPieData);
PieData_Routes.get("/getAll", getAllPieData);
PieData_Routes.get("/employee/:employe", getPieDataByEmployee);
PieData_Routes.put("/update/:employe", updatePieData);
PieData_Routes.delete("/delete/:employe", deletePieData);
