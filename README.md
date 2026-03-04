 
---

# Node.js Labs Project

A simple **API project** for **Users**, **Products**, and **Categories** using **Node.js**, **Express**, and **MongoDB**.

---

## Features

* Manage **Users**, **Products**, and **Categories**
* CRUD operations for all entities
* Data validation and error handling
* Easy to test with **Postman** or **curl**

---

## Labs Overview

### **Lab 2 – Refactor Lab 1**

* Use **Express API**
* Data read from **JSON files**
* Add **middlewares** and **routes**

### **Lab 3 – MongoDB & Mongoose**

* Store data in **MongoDB**
* Use **Mongoose models** for validation
* Add **global error handling middleware**

### **Lab 4 – Request Validation**

* Validate API requests using **express-validator**
* Bonus: Use **Joi** for advanced validation

---

## How to Run

1. Clone the repo:

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
PORT=4000
MONGO_URI=<your-mongodb-connection-string>
```

4. Start the server:

```bash
npm run dev
```

Server runs at:

```
http://localhost:4000
```

---

## API Endpoints

### Users

* `GET /api/users` → List all users
* `GET /api/users/:id` → Get user by ID
* `POST /api/users` → Add new user
* `PATCH /api/users/:id` → Update user password
* `DELETE /api/users/:id` → Delete user

### Categories

* `GET /api/categories` → List categories
* `POST /api/categories` → Add new category

### Products

* `GET /api/products` → List all products
* `GET /api/products/:id` → Get product by ID
* `PUT /api/products/:id` → Replace product
* `PATCH /api/products/:id` → Update part of product
* `DELETE /api/products/:id` → Delete product

---

## Notes

* Create **categories first** before adding products
* Test APIs using **Postman** or **curl**

---

 
