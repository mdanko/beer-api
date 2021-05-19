import connectDB from "./config/db.js";
import beerRoutes from "./routes/beerRoute.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/beer", beerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
