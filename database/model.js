import db from "./connection.js"

async function getAllProducts() {
  const query_text = /* sql */ `
  SELECT products.*, categories.category, brands.brand 
  FROM products
  INNER JOIN categories ON categories.id=products.category_id
  INNER JOIN brands ON brands.id = products.brand_id`;
  return await db
    .query(query_text)
    .then((products) => products.rows)
}

async function getAllCategories() {
  const query_text = /* sql */ `
  SELECT * FROM categories`;
  return await db
    .query(query_text)
    .then((categories) => categories.rows)
}

export { getAllProducts, getAllCategories }