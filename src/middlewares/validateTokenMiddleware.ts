import { NextFunction, Request, Response } from "express";

import userRepository from "../repositories/userRepository.js";
import userUtils from "../utils/userUtils.js";

export async function validateTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization = "" } = req.headers;
  const token = authorization.replace("Bearer ", "");
  if (token === "") {
    throw {
      name: "unauthorized",
      message: "⚠ No token provided!",
    };
  }

  const { userId } = userUtils.verifyToken(token);
  if (!userId) {
    throw {
      name: "unauthorized",
      message: "⚠ Invalid token!",
    };
  }

  const user = await userRepository.findById(Number(userId));
  if (!user) {
    throw {
      name: "unprocessableEntity",
      message: "⚠ No user found with given id!",
    };
  }

  res.locals.user = user;

  next();
}
