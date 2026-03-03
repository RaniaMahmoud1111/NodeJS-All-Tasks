import Category from "../models/category.js";

// GET all categories
export const getAllCategories = async (req, res) => {
  const categories = await Category.getAllCategories();
  return res.status(200).json(categories);
};

// GET category by ID
export const getCategoryById = async (req, res) => {
  const category = await Category.getCategoryById(req.params.id);
  if (!category) return res.status(404).json({ message: "Category not found" });
  return res.status(200).json(category);
};

// CREATE category
export const createCategory = async (req, res) => {
  const { name } = req.body;
  const categoryInstance = new Category(name);
  categoryInstance.id = await Category.createCategory(categoryInstance);

  return res.status(201).json({
    message: "Category created",
    category: categoryInstance,
  });
};

// UPDATE category
export const updateCategory = async (req, res) => {
  const updated = await Category.updateCategory(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Category not found" });

  return res.status(200).json({
    message: "Category updated successfully",
    category: updated,
  });
};

// DELETE category
export const deleteCategory = async (req, res) => {
  const deleted = await Category.deleteCategory(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Category not found" });

  return res.status(200).json({
    message: "Category deleted successfully",
    category: deleted,
  });
};