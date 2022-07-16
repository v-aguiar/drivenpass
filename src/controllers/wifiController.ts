import { Request, Response } from "express";

import wifiService, { CreateWifiData } from "../services/wifiService.js";

export type CreateWifiBody = Omit<CreateWifiData, "userId">;

export async function create(req: Request, res: Response) {
  const createWifiData: CreateWifiBody = req.body;
  const { userId } = res.locals;

  await wifiService.create({ ...createWifiData, userId });

  res.status(201).send("✔ Wifi network registered!");
}

export async function search(req: Request, res: Response) {
  const { userId } = res.locals;

  const wifiNetworks = await wifiService.search(userId);

  res.status(200).send(wifiNetworks);
}

export async function searchById(req: Request, res: Response) {
  const { id } = req.params;
  const { userId } = res.locals;

  const wifiNetwork = await wifiService.searchById(userId, Number(id));

  res.status(200).send(wifiNetwork);
}
