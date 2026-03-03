import { Router } from "express";

// import handlers
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
const router = Router();

router.get("/", getAllProducts);
router.post("/", createProduct);

// static routes must come first before dynamic routes
// router.get("/validate",(req,res)=>{
//     return res.status(200).send(`validating Products`);
// })
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
