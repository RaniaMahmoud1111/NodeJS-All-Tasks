import { param } from "express-validator";

export const idParamValidator = [
  param("id")
    .notEmpty()
    .withMessage("ID param required")
    .isMongoId()
    .withMessage("Invalid MongoDB ID"),
];