import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

const app = express();

// Routes
import postRoutes from "./routes/posts.Routes.js";

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/posts", postRoutes);
