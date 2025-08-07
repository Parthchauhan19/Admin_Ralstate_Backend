import express from "express";
import { createService, getAllService } from "../Controller/service.js";

const servicerouter = express.Router();

servicerouter.post("/", createService);
servicerouter.get("/", getAllService);

export default servicerouter;
