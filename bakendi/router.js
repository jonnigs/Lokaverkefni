import express from "express";
import pkg from "pg";
import { graphqlHTTP } from "express-graphql";
const { Client } = pkg;
import { Schema } from "./schema/schema.js";

export const router = express.Router();

function getConnectionString() {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "climb3d",
    password: "jonni1990",
  });
  return client;
}

async function fetchLandshluti() {
  const client = getConnectionString();
  await client.connect();
  const data = await client.query("SELECT * FROM landshluti");
  console.log(data.rows);
  client.end();
}

async function fetchArea() {
  const client = getConnectionString();
  await client.connect();
  const data = await client.query("SELECT * FROM area");
  console.log(data.rows);
  client.end();
}

async function fetchSector() {
  const client = getConnectionString();
  await client.connect();
  const data = await client.query("SELECT * FROM sector");
  console.log(data.rows);
  client.end();
}

async function fetchRoutes() {
  const client = getConnectionString();
  await client.connect();
  const data = await client.query("SELECT * FROM route");
  console.log(data.rows);
  client.end();
}

async function fetchUsers() {
  const client = getConnectionString();
  await client.connect();
  const data = await client.query("SELECT * FROM test");
  console.log(data.rows);
  client.end();
}

async function fetchHadegishamar() {
  const client = getConnectionString();
  await client.connect();
  const area = await client.query(
    "SELECT * FROM area WHERE id=cast(3 as BIGINT)"
  );
  const sector = await client.query(
    "SELECT * FROM sector WHERE id=cast(1 as BIGINT)"
  );
  const routes = await client.query("SELECT * FROM route");
  console.log(area.rows, sector.rows, routes.rows);
  client.end();
}

// Catch errors
function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function getData(req, res) {
  await fetchHadegishamar();
  res.send("DATA");
}

router.get("/data", catchErrors(getData));

router.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);
