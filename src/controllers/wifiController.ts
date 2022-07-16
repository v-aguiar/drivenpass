import { Request, Response } from "express";

import wifiService, { CreateWifiData } from "../services/wifiService.js";

export type CreateWifiBody = Omit<CreateWifiData, "userId">;

export async function create(req: Request, res: Response) {
  const createWifiData: CreateWifiBody = req.body;
  const { userId } = res.locals;

  await wifiService.create({ ...createWifiData, userId });

  res.status(201).send("✔ Wifi network registered!");
}
