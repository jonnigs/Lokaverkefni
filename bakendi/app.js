import express from "express";
import { router } from "./router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use("/", router);

// 404
function notFoundHandler(req, res, next) {
  // eslint-disable-line
  res.status(404).send("error");
}

// Villumeðhöndlun
function errorHandler(err, req, res, next) {
  // eslint-disable-line
  console.error(err);
  res.status(500).send("error");
}

app.use(notFoundHandler);
app.use(errorHandler);

const { HOST: hostname = "127.0.0.1", PORT: port = 3000 } = process.env;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
