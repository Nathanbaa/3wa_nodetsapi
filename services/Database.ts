import mongoose, { ConnectOptions } from "mongoose";
import { MONGO_URI } from "../config/dbConnection";

export default async () => {
  mongoose
    .connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions)
    .then(() => console.log("✅ connexion à la db établie"))
    .catch((err) => console.error(err));
};
