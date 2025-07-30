// pieDataController.js
import PieData from "../Model/piedata.js";

// Create PieData
export const createPieData = async (req, res) => {
  try {
    const { employe, House, Tenaments, Rental, Commercial } = req.body;

    // Check if employee already exists
    const existingPieData = await PieData.findOne({ employe });
    if (existingPieData) {
      return res
        .status(400)
        .json({ error: "Employee pie data already exists" });
    }

    const newPieData = new PieData({
      employe,
      House: House || 0,
      Tenaments: Tenaments || 0,
      Rental: Rental || 0,
      Commercial: Commercial || 0,
    });

    await newPieData.save();
    res
      .status(201)
      .json({ message: "Pie data created successfully", data: newPieData });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All PieData
export const getAllPieData = async (req, res) => {
  try {
    const pieData = await PieData.find().sort({ createdAt: -1 });
    res.status(200).json(pieData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get PieData by Employee Name
export const getPieDataByEmployee = async (req, res) => {
  try {
    const pieData = await PieData.findOne({ employe: req.params.employe });
    if (!pieData) {
      return res
        .status(404)
        .json({ message: "Pie data not found for this employee" });
    }
    res.status(200).json(pieData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update PieData
export const updatePieData = async (req, res) => {
  try {
    const { employe, House, Tenaments, Rental, Commercial } = req.body;

    const updated = await PieData.findOneAndUpdate(
      { employe: req.params.employe },
      {
        House: House || 0,
        Tenaments: Tenaments || 0,
        Rental: Rental || 0,
        Commercial: Commercial || 0,
      },
      { new: true }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ message: "Pie data not found for this employee" });
    }

    res
      .status(200)
      .json({ message: "Pie data updated successfully", data: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete PieData
export const deletePieData = async (req, res) => {
  try {
    const deleted = await PieData.findOneAndDelete({
      employe: req.params.employe,
    });
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Pie data not found for this employee" });
    }
    res.status(200).json({ message: "Pie data deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
