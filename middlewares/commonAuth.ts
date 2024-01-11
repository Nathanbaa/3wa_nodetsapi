import { NextFunction, Request, Response } from "express";
import { AuthPayload } from "../dto";
import { isValidateSignature } from "../utility";
import { TokenExpiredError } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isValid = await isValidateSignature(req);
    if (isValid) {
      next();
    } else {
      return res.json(401).json({ message: "Utilisateur non authorisé" });
    }
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res.status(401).json({ message: "Token expiré" });
    }
    next(error);
  }
};
