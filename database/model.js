import db from "./connection.js";

async function getAllProducts() {
  const QUERY_TEXT = /* sql */ `
  SELECT products.*, categories.category, brands.brand 
  FROM products
  INNER JOIN categories ON categories.id=products.category_id
  INNER JOIN brands ON brands.id = products.brand_id`;
  return await db.query(QUERY_TEXT).then((products) => products.rows);
}

async function getAllCategories() {
  const query_text = /* sql */ `
  SELECT category FROM categories;`;
  return await db.query(query_text).then((categories) => categories.rows);
}

async function getProductById(id) {
  const QUERY_TEXT = /* sql */ `
  SELECT products.*, categories.category, brands.brand 
  FROM products
  INNER JOIN categories ON categories.id=products.category_id AND products.id = $1
  INNER JOIN brands ON brands.id = products.brand_id`;
  const query_data = await db.query(QUERY_TEXT, [id]);
  return query_data.rows[0];
}

async function getAllProductIds() {
  const ALL_IDS = `SELECT id FROM products`;

  return await db.query(ALL_IDS).then((result) => result.rows);
}

export { getAllProducts, getAllProductIds, getProductById, getAllCategories };
