import express from "express";
import {
  createTransactions,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} from "../Controller/transactions.js";

export const TransactionsRoutes = express.Router();

TransactionsRoutes.post("/create", createTransactions);
TransactionsRoutes.get("/getAll", getAllTransactions);
TransactionsRoutes.get("/:transactionId", getTransactionById);
TransactionsRoutes.put("/update/:transactionId", updateTransaction);
TransactionsRoutes.delete("/delete/:transactionId", deleteTransaction);
