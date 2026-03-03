import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
    let products = await Product.getAllProducts();
    return res.status(200).json(products);
};

export const getProductById = async (req, res) => {
    let product = await Product.getProductById(req.params.id);
    return res.status(200).json(product);
};

export const createProduct = async (req, res) => {
    let { name, price, categoryId } = req.body;

    const product = new Product(name, price, categoryId);
    product.id = await Product.createProduct(product);

    return res.status(201).json({
        message: "Product created",
        product,
    });
};

export const updateProduct = async (req, res) => {
    const updated = await Product.updateProduct(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json({
        message: "Product updated successfully",
        product: updated,
    });
};

export const deleteProduct = async (req, res) => {
    const deleted = await Product.deleteProduct(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    return res.status(200).json({
        message: "Product deleted successfully",
        product: deleted,
    });
};