import express, { json } from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db/index.js";
import todoRoutes from "./routes/todoRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({
  path: ".env",
});

const app = express();
app.use(json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

// Routes
app.use("/api/todos", todoRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
