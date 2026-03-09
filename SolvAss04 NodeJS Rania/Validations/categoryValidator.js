import { body } from "express-validator";

export const createCategoryValidator = [
  body("name")
    .notEmpty()
    .withMessage("Category name required")
    .isLength({ min: 2 })
    .withMessage("Category name must be at least 2 chars"),
];