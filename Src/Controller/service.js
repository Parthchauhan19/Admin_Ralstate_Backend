import Service from "../Model/service.js";

export const createService = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    // Check if phone number already exists
    const existing = await Service.findOne({ phone });
    if (existing) {
      return res
        .status(409)
        .json({ message: "Phone number already requested" });
    }

    const newRequest = new Service({ phone });
    await newRequest.save();

    res.status(201).json({ message: "Service request submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllService = async (req, res) => {
  try {
    const requests = await Service.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
