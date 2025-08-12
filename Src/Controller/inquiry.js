import Inquiry from "../Model/inquiry-models.js";

export const createInquiry = async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.status(201).json({ message: "Inquiry submitted successfully" });
  } catch (error) {
    console.log("Inquiry Not submitted");
    res.status(400).json({ message: error.message });
  }
};

export const getInquiry = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  