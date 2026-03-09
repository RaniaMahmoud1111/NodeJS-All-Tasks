import { Router } from "express";

import validateJoi from "../Validations/Bouns-joi/validateJoi.js";
import { createUserSchema } from "../Validations/Bouns-joi/userSchema.js";

import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/user.cotroller.js";

import { updateUserValidator } from "../Validations/userValidator.js";
import validateResults from "../validations/validateResults.js";
import { idParamValidator } from "../validations/validateMongoId.js";

const router = Router();

router.get("/", getAllUsers);

// ⭐ Joi Bonus
router.post(
  "/",
  validateJoi(createUserSchema),
  createUser
);

router.get(
  "/:id",
  idParamValidator,
  validateResults,
  getUserById
);

router.patch(
  "/:id",
  idParamValidator,
  updateUserValidator,
  validateResults,
  updateUser
);

router.delete(
  "/:id",
  idParamValidator,
  validateResults,
  deleteUser
);

export default router;