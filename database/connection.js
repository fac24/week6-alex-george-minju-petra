const pg = require("pg");

if (!process.env.local.lDATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const db = new pg.Pool({
  connectionString: process.env.local.DATABASE_URL,
});

export default db
