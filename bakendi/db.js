import pkg from "pg";
const { Client, Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();

export async function query(q, val) {
  const pool = new Pool();
  pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
  });
  const client = await pool.connect();
  let result;
  try {
    result = await client.query(q, val);
  } catch (e) {
    console.error("Error selecting", e);
  } finally {
    client.release();
  }

  await pool.end();
  return result.rows;
}
