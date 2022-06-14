const pg = require("pg");

<<<<<<< HEAD
if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set");
}

const db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

export default db
=======
if (!process.env.local.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const db = new pg.Pool({
  connectionString: process.env.local.DATABASE_URL,
});

module.exports = db;
>>>>>>> main
