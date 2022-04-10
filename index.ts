import express from "express";
import cors from "cors";
import urls from "routes/urls";
import mongoose from "mongoose";

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/urls", urls);

mongoose
  .connect("mongodb://localhost/url-shortener")
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log("could not connect to MongoDb", error));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`started server on port ${PORT}`));
