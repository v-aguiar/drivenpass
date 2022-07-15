import { Request, Response } from "express";

import credentialService, { CreateCredentialData } from "../services/credentialService.js";

export async function insert(req: Request, res: Response) {
  const createCredentialData: CreateCredentialData = req.body;

  await credentialService.create(createCredentialData);

  res.sendStatus(201);
}

export async function search(req: Request, res: Response) {
  const { userId } = res.locals;

  const credentials = await credentialService.search(userId);

  res.status(200).send(credentials);
}
