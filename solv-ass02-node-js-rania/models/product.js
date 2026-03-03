import fs from "fs/promises";
import { ROOTDIR } from "../util/path.js";
import path from "path";

export default class Product {
  constructor(name, price, categoryId = "") {
    this.name = name;
    this.price = price;
    this.categoryId = categoryId;
  }

  static async getAllProducts() {
    // read from file
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "products.json"),
      "utf-8",
    );
    console.log(data);
    let { products } = JSON.parse(data);//js obj 
    return products;
  }
  static async getProductById(id){
    // read from file
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "products.json"),
      "utf-8",
    );
    console.log(data);
    let { products } = JSON.parse(data);
    let product = products.find((u) => u.id == id);
    return product;
  }
  static async createProduct(product) {
    // read from file
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "products.json"),
      "utf-8",
    );
    console.log(data);
    let { products } = JSON.parse(data);
    product.id = products[products.length - 1].id + 1;
    products.push(product);
    // write on file
    await fs.writeFile(
      path.join(ROOTDIR, "data", "products.json"),
      JSON.stringify({ products }, null, 2),
    );
  }

 
 
  static async updateProduct(id, updatedData) {
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "products.json"),
      "utf-8"
    );
    let { products } = JSON.parse(data);
    let index = products.findIndex((p) => p.id == id);
    if (index === -1) return null;

    products[index] = { ...products[index], ...updatedData };

    await fs.writeFile(
      path.join(ROOTDIR, "data", "products.json"),
      JSON.stringify({ products }, null, 2)
    );
    return products[index];
  }

   
  static async deleteProduct(id) {
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "products.json"),
      "utf-8"
    );
    let { products } = JSON.parse(data);
    let index = products.findIndex((p) => p.id == id);
    if (index === -1) return null;

    const deleted = products.splice(index, 1)[0];

    await fs.writeFile(
      path.join(ROOTDIR, "data", "products.json"),
      JSON.stringify({ products }, null, 2)
    );

    return deleted;
  }
}


 
