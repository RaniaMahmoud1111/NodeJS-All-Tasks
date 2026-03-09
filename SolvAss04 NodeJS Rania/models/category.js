import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    minlength: [2, "Category name must be at least 2 characters"],
    maxlength: [50, "Category name can't exceed 50 characters"],
    unique: true,
  },
});

export default mongoose.model("Category", categorySchema);