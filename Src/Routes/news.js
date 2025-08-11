import express from "express";
import {
  getNews,
  createNews,
  updateNews,
  deleteNews,
} from "../Controller/news.js";

const NewsRoutes = express.Router();

NewsRoutes.get("/getAll", getNews);
NewsRoutes.post("/create", createNews);
NewsRoutes.put("/update/:id", updateNews);
NewsRoutes.delete("/delete/:id", deleteNews);

export default NewsRoutes;
