import { Request, Response } from "express";

import { SignUpData } from "../schemas/signUpSchema.js";

import userService from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
  const { email, password }: SignUpData = req.body;

  await userService.signUp({ email, password });

  res.status(201).send("✔ created...");
}
