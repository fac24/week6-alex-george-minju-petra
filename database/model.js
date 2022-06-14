import db from "./connection.js";

async function getAllProducts() {
  const QUERY_TEXT = /* sql */ `
  SELECT products.*, categories.category, brands.brand 
  FROM products
  INNER JOIN categories ON categories.id=products.category_id
  INNER JOIN brands ON brands.id = products.brand_id`;
  const query_data = await db.query(QUERY_TEXT);
  return query_data.rows;
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

  const ids = await db.query(ALL_IDS).then((result) => result.rows);
  return ids.map((productId) => {
    return {
      params: {
        id: `${productId.id}`,
      },
    };
  });
}

export { getAllProducts, getAllProductIds, getProductById };
