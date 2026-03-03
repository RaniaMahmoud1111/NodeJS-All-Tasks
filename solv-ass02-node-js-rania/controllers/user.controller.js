import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  let users = await User.getAllUsers();
  return res.status(200).json(users);
};

export const getuserById = async (req, res) => {
  let user = await User.getUserById(req.params.id);
  return res.status(200).json(user);
};

export const createUser = async (req, res) => {
  let { name, email, password } = req.body;

  const user = new User(name, email, password);
  user.id = await User.createUser(user);

  return res.status(201).json({
    message: "user created",
    user,
  });
};
 
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const updatedUser = await User.updateUser(id, req.body);

  if (!updatedUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.status(200).json({
    message: "User updated successfully",
    user: updatedUser,
  });
};



export const deleteUser = async (req, res) => {
  const deletedUser = await User.deleteUser(req.params.id);

  if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({
    message: "User deleted successfully",
    user: deletedUser,
  });
};
