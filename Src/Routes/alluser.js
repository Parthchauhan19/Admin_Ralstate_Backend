import express from "express";
import {
  createAllUser,
  getAllAllUser,
  getMessagesByAllUser,
  updateAllUser,
  deleteAllUser,
} from "../Controller/alluser.js";

export const AllUserRoutes = express.Router();
AllUserRoutes.post("/create", createAllUser);
AllUserRoutes.get("/getAll", getAllAllUser);
AllUserRoutes.get("/employee/:employe", getMessagesByAllUser);
AllUserRoutes.put("/update/:employe", updateAllUser);
AllUserRoutes.delete("/delete/:employe", deleteAllUser);
