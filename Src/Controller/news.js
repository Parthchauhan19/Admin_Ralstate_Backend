import mongoose from "mongoose";
import News from "../Model/news.js";

// ✅ GET all news
export const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 }); // Latest first
    res.status(200).json(news);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching news", error: error.message });
  }
};

// ✅ CREATE news
export const createNews = async (req, res) => {
  try {
    const { id, title, description, author, date, image } = req.body;

    // Basic validation
    if (!id || !title || !description || !author || !date || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newNews = new News({ id, title, description, author, date, image });
    await newNews.save();

    res
      .status(201)
      .json({ message: "News created successfully", news: newNews });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating news", error: error.message });
  }
};

// ✅ UPDATE news
export const updateNews = async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid news ID" });
  }

  try {
    const updatedNews = await News.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedNews) {
      return res.status(404).json({ message: "News not found" });
    }

    res
      .status(200)
      .json({ message: "News updated successfully", news: updatedNews });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating news", error: error.message });
  }
};

// ✅ DELETE news
export const deleteNews = async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid news ID" });
  }

  try {
    const deletedNews = await News.findByIdAndDelete(id);

    if (!deletedNews) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting news", error: error.message });
  }
};
