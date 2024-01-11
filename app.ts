import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import { MONGO_URI } from "./config/dbConnection";
import { errorHandler } from "./middlewares";
import { apiRoute } from "./routes/api.routes";

const app = express();

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  } as ConnectOptions)
  .then(() => console.log("✅ connexion à la db établie"))
  .catch((err) => console.error(err));

app.use(express.json()); // lui se charge de lire le json dans le body

app.use("/api", apiRoute);

app.use(errorHandler);

app.listen(8000, () => {
  console.clear();
  console.log("✅ connexion établie");
});
