import express from "express";
import cors from "cors";
import urls from "routes/urls";

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/urls", urls);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`started server on port ${PORT}`));
