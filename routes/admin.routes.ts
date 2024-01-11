import express from "express";
import {
  createRestaurant,
  getRestaurantById,
  getRestaurants,
} from "../controllers";

const router = express.Router();

router.post("/restaurant", createRestaurant);
router.get("/restaurants", getRestaurants); // listes restaurants
router.get("/restaurant/:id", getRestaurantById); // id est un parametre de route | recupère un restaurant en particulier

export { router as AdminRoute };
