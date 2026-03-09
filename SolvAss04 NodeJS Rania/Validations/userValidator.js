import { body } from "express-validator";

export const createUserValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name must be 3-50 characters"),

  body("email")
    .notEmpty()
    .withMessage("Email required")
    .isEmail()
    .withMessage("Invalid email"),

  body("password")
    .notEmpty()
    .withMessage("Password required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 chars"),

  body("role")
    .optional()
    .isIn(["user", "admin"])
    .withMessage("Role must be user or admin"),
];

export const updateUserValidator = [
  body("name")
    .optional()
    .isLength({ min: 3, max: 50 }),

  body("email")
    .optional()
    .isEmail(),
];