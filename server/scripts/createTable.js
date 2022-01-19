
import query from "../db/db.js"

const sqlString = `CREATE TABLE IF NOT EXISTS books (id SERIAL PRIMARY KEY, title TEXT, author TEXT)`;

async function createBooksTable() {
  const res = await query(sqlString);
  console.log("Created books table", res);
}

createBooksTable();