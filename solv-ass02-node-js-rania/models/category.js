import fs from "fs/promises";
import path from "path";
import { ROOTDIR } from "../util/path.js";

export default class Category {
  constructor(name) {
    this.name = name;
  }

  static async getAllCategories() {
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "categories.json"),
      "utf-8"
    );
    let { categories } = JSON.parse(data);
    return categories;
  }

  static async getCategoryById(id) {
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "categories.json"),
      "utf-8"
    );
    let { categories } = JSON.parse(data);
    return categories.find((c) => c.id == id);
  }

  static async createCategory(category) {
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "categories.json"),
      "utf-8"
    );
    let { categories } = JSON.parse(data);
    category.id = categories[categories.length - 1]?.id + 1 || 1;
    categories.push(category);
    await fs.writeFile(
      path.join(ROOTDIR, "data", "categories.json"),
      JSON.stringify({ categories }, null, 2)
    );
    return category.id;
  }

  static async updateCategory(id, updatedData) {
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "categories.json"),
      "utf-8"
    );
    let { categories } = JSON.parse(data);
    let index = categories.findIndex((c) => c.id == id);
    if (index === -1) return null;

    categories[index] = { ...categories[index], ...updatedData };

    await fs.writeFile(
      path.join(ROOTDIR, "data", "categories.json"),
      JSON.stringify({ categories }, null, 2)
    );
    return categories[index];
  }

  static async deleteCategory(id) {
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "categories.json"),
      "utf-8"
    );
    let { categories } = JSON.parse(data);
    let index = categories.findIndex((c) => c.id == id);
    if (index === -1) return null;

    const deleted = categories.splice(index, 1)[0];

    await fs.writeFile(
      path.join(ROOTDIR, "data", "categories.json"),
      JSON.stringify({ categories }, null, 2)
    );

    return deleted;
  }
}