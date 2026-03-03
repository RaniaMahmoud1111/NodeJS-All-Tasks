import fs from "fs/promises";
import { ROOTDIR } from "../util/path.js";
import path from "path";

export default class User {
  constructor(name, email, password = "") {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static async getAllUsers() {
    // read from file
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "users.json"),
      "utf-8",
    );
    console.log(data);
    let { users } = JSON.parse(data);
    return users;
  }
  static async getUserById(id) {
    // read from file
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "users.json"),
      "utf-8",
    );
    console.log(data);
    let { users } = JSON.parse(data);
    let user = users.find((u) => u.id == id);
    return user;
  }
  static async createUser(user) {
    // read from file
    let data = await fs.readFile(
      path.join(ROOTDIR, "data", "users.json"),
      "utf-8",
    );
    console.log(data);
    let { users } = JSON.parse(data);
    user.id = users[users.length - 1].id + 1;
    users.push(user);
    // write on file
    await fs.writeFile(
      path.join(ROOTDIR, "data", "users.json"),
      JSON.stringify({ users }, null, 2),
    );
  }


static async updateUser(id, updatedData) {
  let data = await fs.readFile(
    path.join(ROOTDIR, "data", "users.json"),
    "utf-8"
  );

  let { users } = JSON.parse(data);

  let userIndex = users.findIndex((u) => u.id == id);

  if (userIndex === -1) {
    return null;
  }

  // update only provided fields
  users[userIndex] = {
    ...users[userIndex],
    ...updatedData,
  };

  await fs.writeFile(
    path.join(ROOTDIR, "data", "users.json"),
    JSON.stringify({ users }, null, 2)
  );

  return users[userIndex];
}

static async deleteUser(id) {
  let data = await fs.readFile(
    path.join(ROOTDIR, "data", "users.json"),
    "utf-8"
  );

  let { users } = JSON.parse(data);

  let userIndex = users.findIndex((u) => u.id == id);

  if (userIndex === -1) return null;

  const deletedUser = users[userIndex];

  users.splice(userIndex, 1);

  await fs.writeFile(
    path.join(ROOTDIR, "data", "users.json"),
    JSON.stringify({ users }, null, 2)
  );

  return deletedUser;
}

}