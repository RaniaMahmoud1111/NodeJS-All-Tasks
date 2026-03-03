import { Router } from "express";

// import handlers
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
const router = Router();

router.get("/", getAllCategories);
router.post("/", createCategory);

// static routes must come first before dynamic routes
// router.get("/validate",(req,res)=>{
//     return res.status(200).send(`validating Categories`);
// })
router.get("/:id", getCategoryById);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
