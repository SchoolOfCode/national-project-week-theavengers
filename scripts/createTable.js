// Todo
import query from "../db/db.js";

const sqlString = `CREATE TABLE IF NOT EXISTS PostTable (id SERIAL PRIMARY KEY, text TEXT, timestamp TEXT)`;

async function createPostsTable() {
  const res = await query(sqlString);
  console.log("Created posts table", res);
}

createPostsTable(); 