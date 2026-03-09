import { Router } from "express";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controller/user.cotroller.js";

import {
  createUserValidator,
  updateUserValidator,
} from "../validations/userValidator.js";

import validateResults from "../validations/validateResults.js";
import { idParamValidator } from "../validations/validateMongoId.js";

const router = Router();

router.get("/", getAllUsers);

router.post(
  "/",
  createUserValidator,
  validateResults,
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