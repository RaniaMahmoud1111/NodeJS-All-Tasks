import { body } from "express-validator";

export const createProductValidator = [
  body("name")
    .notEmpty()
    .withMessage("Product name required"),

  body("price")
    .notEmpty()
    .withMessage("Price required")
    .isNumeric()
    .withMessage("Price must be number"),

  body("categoryId")
    .notEmpty()
    .withMessage("Category ID required")
    .isMongoId()
    .withMessage("Invalid category id"),
];

export const updateProductValidator = [
  body("name").optional().isString(),
  body("price").optional().isNumeric(),
];