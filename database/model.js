import db from "./connection.js"

function getAllProducts() {
    const GET_ALL_PRODUCTS = `SELECT * FROM products`
    return db
        .query(GET_ALL_PRODUCTS)
        .then((result) => result.rows)
};

export { getAllProducts }