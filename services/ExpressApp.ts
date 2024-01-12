import express, { Application } from "express";
import { apiRoute } from "../routes/api.routes";
import { errorHandler } from "../middlewares";

export default async (app: Application) => {
  app.use(express.json()); // lui se charge de lire le json dans le body

  app.use(express.urlencoded({ extended: true }));

  app.use("/api", apiRoute);

  app.use(errorHandler);

  return app;
};
