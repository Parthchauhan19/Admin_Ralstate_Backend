import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);
export default News;
