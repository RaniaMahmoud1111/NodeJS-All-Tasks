import { Router } from "express";

import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";

import validateJoi from "../validations/Bouns-joi/validateJoi.js";
import { createProductSchema } from "../validations/Bouns-joi/productSchema.js";

import {
  updateProductValidator,
} from "../validations/productValidator.js";

import validateResults from "../validations/validateResults.js";
import { idParamValidator } from "../validations/validateMongoId.js";

const router = Router();

router.get("/", getAllProducts);

//  Joi Bonus
router.post(
  "/",
  validateJoi(createProductSchema),
  createProduct
);

router.get(
  "/:id",
  idParamValidator,
  validateResults,
  getProductById
);

router.patch(
  "/:id",
  idParamValidator,
  updateProductValidator,
  validateResults,
  updateProduct
);

router.delete(
  "/:id",
  idParamValidator,
  validateResults,
  deleteProduct
);

export default router;