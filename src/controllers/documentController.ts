import { Request, Response } from "express";

import documentService, { CreateDocumentData } from "../services/documentService.js";

export type CreateDocumentBody = Omit<CreateDocumentData, "userId">;

export async function create(req: Request, res: Response) {
  const { userId } = res.locals;
  const createDocumentBody: CreateDocumentBody = req.body;

  await documentService.create({ ...createDocumentBody, userId });

  res.status(201).send("✔ Document created!");
}
