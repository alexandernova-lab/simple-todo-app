import express, { json } from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db/index.js";

dotenv.config({
  path: ".env",
});

const app = express();
app.use(json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
