import Product from "../models/product.js";
import Category from "../models/category.js";
import HTTPError from "../util/httpError.js";

export const createProduct = async (req, res, next) => {
  try {
    const { name, price, categoryId } = req.body;

    const category = await Category.findById(categoryId);
    if (!category) return next(new HTTPError(404, "Category not found"));

    const product = await Product.create({
      name,
      price,
      category: categoryId,
    });

    return res.status(201).json({ message: "Product created", product });
  } catch (err) {
    next(err);
  }
};

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate("category", "name");
    return res.status(200).json({ count: products.length, products });
  } catch (err) {
    next(err);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate("category", "name");
    if (!product) return next(new HTTPError(404, "Product not found"));

    return res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { name, price, categoryId } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return next(new HTTPError(404, "Product not found"));

    if (categoryId) {
      const category = await Category.findById(categoryId);
      if (!category) return next(new HTTPError(404, "Category not found"));
      product.category = categoryId;
    }

    product.name = name || product.name;
    product.price = price || product.price;

    await product.save();
    return res.status(200).json({ message: "Product updated", product });
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return next(new HTTPError(404, "Product not found"));

    await product.deleteOne();
    return res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    next(err);
  }
};