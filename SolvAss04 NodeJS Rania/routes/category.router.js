import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controller/category.controller.js";

import { createCategoryValidator } from "../validations/categoryValidator.js";
import validateResults from "../validations/validateResults.js";
import { idParamValidator } from "../validations/validateMongoId.js";

const router = Router();

router.get("/", getAllCategories);

router.post(
  "/",
  createCategoryValidator,
  validateResults,
  createCategory
);

router.get(
  "/:id",
  idParamValidator,
  validateResults,
  getCategoryById
);

router.patch(
  "/:id",
  idParamValidator,
  validateResults,
  updateCategory
);

router.delete(
  "/:id",
  idParamValidator,
  validateResults,
  deleteCategory
);

export default router;