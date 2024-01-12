import express from "express";
import {
  displayRestaurant,
  getFoodsIn30min,
  getRestaurantsAvailable,
  getTopRestaurants,
  searchFoods,
} from "../../controllers/v1";

const router = express.Router();

router.get("/:postalcode", getRestaurantsAvailable); // liste des plats disponibles dans une ville en particulier
router.get("/top-restaurants/:postalcode/:limit", getTopRestaurants); // le top 10 des restau les mieux notés dans une ville en particulier
router.get("/foods-in-30-minutes/:postalcode", getFoodsIn30min); // la liste des plats livrés en - de 30min dans une ville en particulier
router.get("/search/:postalcode", searchFoods); // recherche de plats dans une ville en particulier
router.get("/show-restaurant/:id", displayRestaurant); //Affiche les détails d'un restau en particulier

export { router as ShoppingRoute };
