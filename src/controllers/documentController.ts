import { Request, Response } from "express";

import documentService, { CreateDocumentData } from "../services/documentService.js";

export type CreateDocumentBody = Omit<CreateDocumentData, "userId">;

export async function create(req: Request, res: Response) {
  const { userId } = res.locals;
  const createDocumentBody: CreateDocumentBody = req.body;

  await documentService.create({ ...createDocumentBody, userId });

  res.status(201).send("✔ Document created!");
}

export async function search(req: Request, res: Response) {
  const { userId } = res.locals;

  const documents = await documentService.search(userId);

  res.status(200).send(documents);
}

export async function searchById(req: Request, res: Response) {
  const { userId } = res.locals;
  const { id } = req.params;

  const document = await documentService.searchById(userId, Number(id));

  res.status(200).send(document);
}

export async function remove(req: Request, res: Response) {
  const { userId } = res.locals;
  const { id } = req.params;

  await documentService.remove(userId, Number(id));

  res.status(200).send("✔ Document removed!");
}
