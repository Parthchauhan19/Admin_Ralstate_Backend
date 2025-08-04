import Transactions from "../Model/transactions.js";

export const createTransactions = async (req, res) => {
  try {
    const {
      transactionId,
      propertyId,
      propertyTitle,
      type,
      amount,
      commission,
      status,
      paymentMethod,
      date,
      buyer,
    } = req.body;

    const existing = await Transactions.findOne({ transactionId });
    if (existing) {
      return res
        .status(400)
        .json({ message: "Transaction already exists with this ID." });
    }

    const newTransaction = new Transactions({
      transactionId,
      propertyId,
      propertyTitle,
      type,
      amount,
      commission,
      status,
      paymentMethod,
      date,
      buyer,
    });

    await newTransaction.save();
    res.status(201).json({
      message: "Transaction created successfully",
      data: newTransaction,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating transaction", error: error.message });
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.find().sort({ createdAt: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching transactions", error: error.message });
  }
};

export const getTransactionById = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const transaction = await Transactions.findOne({ transactionId });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching transaction", error: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    const { transactionId } = req.params;

    const updated = await Transactions.findOneAndUpdate(
      { transactionId },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res
      .status(200)
      .json({ message: "Transaction updated successfully", data: updated });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating transaction", error: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { transactionId } = req.params;

    const deleted = await Transactions.findOneAndDelete({ transactionId });

    if (!deleted) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting transaction", error: error.message });
  }
};
