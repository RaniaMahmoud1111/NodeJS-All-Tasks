import { Router } from "express";

// import handlers
import {
  getAllUsers,
  getuserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);

// static routes must come first before dynamic routes
// router.get("/validate",(req,res)=>{
//     return res.status(200).send(`validating users`);
// })
router.get("/:id", getuserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
