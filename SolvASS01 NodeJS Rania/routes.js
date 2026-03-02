const { getAllProducts, getProductById, createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct, getAllCatigories, createCategory, getAllUsers, getUserById, createUser, replaceUser,
    updateUser,
    deleteUser } = require('./handler.js');

module.exports = (req, res) => {
    //here the server logic 
    //recive req => create res 

    console.log(`current request: ${req.method} ${req.url}`);

    //routing
    if (req.method === "GET" && req.url === "/Products") {
        return getAllProducts(req, res);
    } else if (req.method === "GET" && req.url.startsWith("/Products/")) {
        getProductById(req, res);
    }
    else if (req.method === "POST" && req.url === "/Products")
        return createProduct(req, res);

    else if (req.method === "PUT" && req.url.startsWith("/Products/"))
        return replaceProduct(req, res);

    else if (req.method === "PATCH" && req.url.startsWith("/Products/"))
        return updateProduct(req, res);

    else if (req.method === "DELETE" && req.url.startsWith("/Products/"))
        return deleteProduct(req, res);
    else if (req.method === "GET" && req.url === '/Categories') {
        getAllCatigories(req, res);
    } else if (req.method === "POST" && req.url === '/Categories') {
        createCategory(req, res);
    }
    else if (req.method === "GET" && req.url === '/Users') {
        getAllUsers(req, res);
    }
    else if (req.method === "GET" && req.url.startsWith("/Users/")) {
        getUserById(req, res);
    }
    else if (req.method === "POST" && req.url === '/Users') {
        createUser(req, res);
    } else if (req.method === "PUT" && req.url.startsWith("/Users/"))
        return replaceUser(req, res);

    else if (req.method === "PATCH" && req.url.startsWith("/Users/"))
        return updateUser(req, res);

    else if (req.method === "DELETE" && req.url.startsWith("/Users/"))
        return deleteUser(req, res);
}

