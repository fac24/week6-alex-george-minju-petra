import db from "./connection.js"

export async function getAllProducts() {
  const query_text = /* sql */ `
  SELECT products.*, categories.category, brands.brand 
  FROM products
  INNER JOIN categories ON categories.id=products.category_id
  INNER JOIN brands ON brands.id = products.brand_id`;
  return await db
    .query(query_text)
    .then((products) => products.rows)
}

export async function getAllCategories() {
  const query_text = /* sql */ `
  SELECT * FROM categories;`
  return await db
    .query(query_text)
    .then((categories) => console.log('////', categories))
}

// export { getAllProducts, getAllCategories }