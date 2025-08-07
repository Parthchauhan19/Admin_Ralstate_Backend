import express from "express";
import { createInquiry, getInquiry } from "../Controller/inquiry.js";

const InquiryRoutes = express.Router();

InquiryRoutes.post("/", createInquiry);
InquiryRoutes.get("/", getInquiry);

export default InquiryRoutes;
