import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const formattedError = {
    error: err.message || "Une erreur s'est produite",
    code: (err as any).statusCode || 500,
  };

  return res
    .status(formattedError.code)
    .json({ success: false, data: null, error: formattedError });
};
