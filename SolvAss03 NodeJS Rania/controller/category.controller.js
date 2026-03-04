import Category from "../models/category.js";
import HTTPError from "../util/httpError.js";

export const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    return res.status(201).json({ message: "Category created", category });
  } catch (err) {
    next(err);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({ count: categories.length, categories });
  } catch (err) {
    next(err);
  }
};

export const getCategoryById = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return next(new HTTPError(404, "Category not found"));
    return res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return next(new HTTPError(404, "Category not found"));

    category.name = req.body.name || category.name;
    await category.save();
    return res.status(200).json({ message: "Category updated", category });
  } catch (err) {
    next(err);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return next(new HTTPError(404, "Category not found"));

    await category.deleteOne();
    return res.status(200).json({ message: "Category deleted" });
  } catch (err) {
    next(err);
  }
};