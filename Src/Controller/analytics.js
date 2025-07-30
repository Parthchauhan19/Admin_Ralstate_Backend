

// analyticsController.js
import Analytics from "../Model/analytics.js";

// Create Analytics
export const createAnalytics = async (req, res) => {
  try {
    const { employe, Newvisites, revisites, Property } = req.body;

    // Check if employee already exists
    const existingAnalytics = await Analytics.findOne({ employe });
    if (existingAnalytics) {
      return res.status(400).json({ error: "Employee already exists" });
    }

    const newAnalytics = new Analytics({
      employe,
      Newvisites: Newvisites || 0,
      revisites: revisites || 0,
      Property: Property || 0,
    });

    await newAnalytics.save();
    res
      .status(201)
      .json({ message: "Analytics created successfully", data: newAnalytics });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Analytics
export const getAllAnalytics = async (req, res) => {
  try {
    const analytics = await Analytics.find().sort({ createdAt: -1 });
    res.status(200).json(analytics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Analytics by ID
export const getAnalyticsById = async (req, res) => {
  try {
    const analytics = await Analytics.findById(req.params.id);
    if (!analytics) {
      return res.status(404).json({ message: "Analytics not found" });
    }
    res.status(200).json(analytics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Analytics
export const updateAnalytics = async (req, res) => {
  try {
    const { employe, Newvisites, revisites, Property } = req.body;

    const updated = await Analytics.findByIdAndUpdate(
      req.params.id,
      {
        employe,
        Newvisites: Newvisites || 0,
        revisites: revisites || 0,
        Property: Property || 0,
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Analytics not found" });
    }

    res
      .status(200)
      .json({ message: "Analytics updated successfully", data: updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Analytics
export const deleteAnalytics = async (req, res) => {
  try {
    const deleted = await Analytics.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Analytics not found" });
    }
    res.status(200).json({ message: "Analytics deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
