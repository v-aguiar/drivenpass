import { Request, Response } from "express";

import safeNoteService, { CreateSafeNoteData } from "../services/safeNoteService.js";

export type SafeNoteBody = Omit<CreateSafeNoteData, "userId">;

export async function create(req: Request, res: Response) {
  const safeNoteBody: SafeNoteBody = req.body;
  const { userId } = res.locals;

  await safeNoteService.create({ ...safeNoteBody, userId });

  res.status(201).send("✔ Note created!");
}

export async function search(req: Request, res: Response) {
  const { userId } = res.locals;

  const safeNotes = await safeNoteService.search(userId);

  res.status(200).send(safeNotes);
}

export async function searchById(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  const safeNote = await safeNoteService.searchById(userId, Number(id));

  res.status(200).send(safeNote);
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  await safeNoteService.remove(userId, Number(id));

  res.status(200).send("✔ Note removed!");
}
