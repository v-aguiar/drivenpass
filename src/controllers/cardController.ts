import { Request, Response } from "express";

import cardService, { CreateCardData } from "../services/cardService.js";

export type CreateCardBody = Omit<CreateCardData, "userId">;

export async function create(req: Request, res: Response) {
  const createCardBody: CreateCardBody = req.body;
  const { userId } = res.locals;

  await cardService.create({ ...createCardBody, userId });

  res.status(201).send("✔ Created!");
}
