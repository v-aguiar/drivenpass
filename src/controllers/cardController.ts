﻿import { Request, Response } from "express";

import cardService, { CreateCardData } from "../services/cardService.js";

export type CreateCardBody = Omit<CreateCardData, "userId">;

export async function create(req: Request, res: Response) {
  const createCardBody: CreateCardBody = req.body;
  const { userId } = res.locals;

  await cardService.create({ ...createCardBody, userId });

  res.status(201).send("✔ Created!");
}

export async function search(req: Request, res: Response) {
  const { userId } = res.locals;

  const cards = await cardService.search(userId);

  res.status(200).send(cards);
}

export async function searchById(req: Request, res: Response) {
  const { userId } = res.locals;
  const { id } = req.params;

  const card = await cardService.searchById(userId, Number(id));

  res.status(200).send(card);
}

export async function remove(req: Request, res: Response) {
  const { userId } = res.locals;
  const { id } = req.params;

  await cardService.remove(userId, Number(id));

  res.status(200).send("✔ Removed!");
}
