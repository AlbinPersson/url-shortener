import express from "express";
import cors from "cors";
import urls from "routes/urls";
import mongoose from "mongoose";
import "express-async-errors";
import error from "middleware/error";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/urls", urls);
app.use(error);

mongoose
  .connect("mongodb://localhost/url-shortener")
  .then(() => console.log("connected to MongoDB"))
  .catch((error) => console.log("could not connect to MongoDb", error));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`started server on port ${PORT}`));
