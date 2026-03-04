
# E-Commerce API

A simple **Node.js + Express + MongoDB API** to manage **users**, **products**, and **categories**.

---

## Features

* Create, read, update, and delete **users**
* Create, read, update, and delete **categories**
* Create, read, update, and delete **products**
* Uses MongoDB to store data

---

## Setup

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

```
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
```

4. Start the server:

```bash
npm run dev
```

Server runs at:

```
http://localhost:3000
```

---

## API Endpoints

### Users

* `POST /api/users` → Create user
* `GET /api/users` → Get all users
* `GET /api/users/:id` → Get a user by ID
* `PATCH /api/users/:id` → Update user
* `DELETE /api/users/:id` → Delete user

### Categories

* `POST /api/categories` → Create category
* `GET /api/categories` → Get all categories
* `GET /api/categories/:id` → Get category by ID
* `PATCH /api/categories/:id` → Update category
* `DELETE /api/categories/:id` → Delete category

### Products

* `POST /api/products` → Create product (`categoryId` required)
* `GET /api/products` → Get all products
* `GET /api/products/:id` → Get product by ID
* `PATCH /api/products/:id` → Update product
* `DELETE /api/products/:id` → Delete product

---

## Testing

Use **Postman** or **curl**.

**Example:**

Create a category:

```json
POST /api/categories
{ "name": "Phones" }
```

Create a product:

```json
POST /api/products
{ "name": "iPhone 14", "price": 999, "categoryId": "<category_id>" }
```

---

## Notes

* Create **categories first** before adding products.
* All data is stored in MongoDB.
 
