import { Request, Response } from "express";

import userService, { AuthData } from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
  const { email, password }: AuthData = req.body;

  await userService.signUp({ email, password });

  res.status(201).send("✔ created...");
}

export async function signIn(req: Request, res: Response) {
  const { email, password }: AuthData = req.body;

  const token = await userService.createSession({ email, password });

  res.status(200).send({ token });
}
