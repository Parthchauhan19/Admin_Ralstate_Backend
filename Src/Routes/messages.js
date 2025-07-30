import express from "express";
import {
  createMessages,
  getAllMessages,
  getMessagesByEmployee,
  updateMessages,
  deleteMessages,
} from "../Controller/messages.js";

export const MessagesRoutes = express.Router();

MessagesRoutes.post("/create", createMessages);
MessagesRoutes.get("/getAll", getAllMessages);
MessagesRoutes.get("/employee/:employe", getMessagesByEmployee);
MessagesRoutes.put("/update/:employe", updateMessages);
MessagesRoutes.delete("/delete/:employe", deleteMessages);
