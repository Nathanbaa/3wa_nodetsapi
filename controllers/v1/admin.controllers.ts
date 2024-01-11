import { NextFunction, Request, Response } from "express";
import { createRestaurantInputs } from "../../dto";
import { Restaurant } from "../../models";
import { generateSalt, hashPassword } from "../../utility";

export const findRestaurant = async (
  id: string | undefined,
  email?: string
) => {
  if (email) {
    return Restaurant.findOne({ email }).exec(); // exec pour transformer en promess
  }
  return Restaurant.findById(id).exec();
};

export const createRestaurant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = <createRestaurantInputs>req.body;

    const salt = await generateSalt();
    const hashedPassword = await hashPassword(body.password, salt);

    const newRestaurant = new Restaurant({
      ...body,
      salt: salt,
      password: hashedPassword,
    });

    const result = await newRestaurant.save();

    return res.status(201).json({
      success: true,
      data: result,
      error: null,
    });
  } catch (error) {
    next(error);
  }
};

export const getRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const restaurants = await Restaurant.find({});
    if (restaurants.length) {
      return res
        .status(200)
        .json({ success: true, data: restaurants, error: null });
    }
    return res.status(404).json({
      success: false,
      data: null,
      error: { message: "Pas de restaurants", code: 404 },
    });
  } catch (error) {
    next(error);
  }
};

export const getRestaurantById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.findById(id);
    if (restaurant) {
      return res
        .status(200)
        .json({ success: true, data: restaurant, error: null });
    }
  } catch (error) {
    if ((error as any).name === "CastError") {
      return res.status(404).json({
        success: false,
        data: null,
        error: { message: "Pas de restaurant à cet id", code: 404 },
      });
    }
    next(error);
  }
};
