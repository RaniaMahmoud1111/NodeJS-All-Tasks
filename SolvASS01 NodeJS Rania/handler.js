
let {
    products,
    categories,
    users
} = require("./data.js");

//PRODUCTS (getAll, getById, put , patch ,delete)
//Get ALL
module.exports.getAllProducts = (req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(products));
    return res.end();
}

//Get ById
module.exports.getProductById = (req, res) => {
    //1 get id from url params  :3000/Products/Id
    const product_Id = req.url.split("/")[2];

    const product = products.find((pr) => pr.id == product_Id);
    if (product) {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(product));
    }
    else {
        res.writeHead(404, { "content-type": "application/json" });
        const msg = { Message: `Product with id: ${product_Id} is not found !` };
        res.write(JSON.stringify(msg));
    }
    return res.end();

}

// Create Product
module.exports.createProduct = (req, res) => {
    let body = "";

    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", () => {
        const newProduct = JSON.parse(body);

        products.push(newProduct);

        res.writeHead(201, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            message: "Product created",
            newProduct
        }));
    });
};
//put 
module.exports.replaceProduct = (req, res) => {
    const id = req.url.split("/")[2];
    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
        const index = products.findIndex(p => p.id == id);

        if (index === -1) {
            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ message: "Product not found" }));
        }

        const newProduct = JSON.parse(body);
        products[index] = newProduct;

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            message: "Product replaced",
            newProduct
        }));
    });
};
//patch
module.exports.updateProduct = (req, res) => {
    const id = req.url.split("/")[2];
    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
        const product = products.find(p => p.id == id);

        if (!product) {
            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ message: "Product not found" }));
        }

        const updates = JSON.parse(body);

        Object.assign(product, updates);

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            message: "Product updated",
            product
        }));
    });
};
//delete
module.exports.deleteProduct = (req, res) => {
    const id = req.url.split("/")[2];

    const index = products.findIndex(p => p.id == id);

    if (index === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Product not found" }));
    }

    const deleted = products.splice(index, 1);

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
        message: "Product deleted",
        deleted
    }));
};






//CATEGORIES(GetAllCatigories)

module.exports.getAllCatigories = (req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(categories));
    return res.end();
};

// Post new categ
module.exports.createCategory = (req, res) => {
    //get data from req body
    //req body will be handled as a stream
    //getting data chunck by chunk

    let body = "";
    req.on("data", (chunck) => {
        body += chunck;
    });
    req.on("end", () => {
        let cate = JSON.parse(body);//js obj , body is ready to use 
        console.log(cate);

        categories.push(cate);
        res.writeHead(201, { "content-type": "application/json" });
        res.write(JSON.stringify({
            message: "Category creaded",
            cate,
        }),);
        return res.end();
    });
};






//USERS()
//get all users
module.exports.getAllUsers = (req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(users));
    return res.end();
};

//Get user ById
module.exports.getUserById = (req, res) => {
    //1 get id from url params  :3000/users/Id
    const user_Id = req.url.split("/")[2];

    const user = users.find((pr) => pr.id == user_Id);
    if (user) {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(user));
    }
    else {
        res.writeHead(404, { "content-type": "application/json" });
        const msg = { Message: `user with id: ${user_Id} is not found !` };
        res.write(JSON.stringify(msg));
    }
    return res.end();

}

// Post user
module.exports.createUser = (req, res) => {
    //get data from req body
    //req body will be handled as a stream
    //getting data chunck by chunk

    let body = "";
    req.on("data", (chunck) => {
        body += chunck;
    });
    req.on("end", () => {
        let newUser = JSON.parse(body);//js obj , body is ready to use 
        console.log(newUser);

        users.push(newUser);
        res.writeHead(201, { "content-type": "application/json" });
        res.write(JSON.stringify({
            message: "new User creaded",
            newUser,
        }),);
        return res.end();
    });
};
//put 
module.exports.replaceUser = (req, res) => {
    const id = req.url.split("/")[2];
    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
        const index = users.findIndex(u => u.id == id);

        if (index === -1) {
            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ message: "User not found" }));
        }

        const newUser = JSON.parse(body);
        users[index] = newUser;

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            message: "User replaced",
            newUser
        }));
    });
};
//patch
module.exports.updateUser = (req, res) => {
    const id = req.url.split("/")[2];
    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
        const user = users.find(u => u.id == id);

        if (!user) {
            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ message: "User not found" }));
        }

        const updates = JSON.parse(body);

        Object.assign(user, updates);

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            message: "User updated",
            user
        }));
    });
};
//delete user
module.exports.deleteUser = (req, res) => {
    const id = req.url.split("/")[2];

    const index = users.findIndex(u => u.id == id);

    if (index === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "User not found" }));
    }

    const deleted = users.splice(index, 1);

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
        message: "User deleted",
        deleted
    }));
};