import { WifiNetworks } from "@prisma/client";

import wifiRepository from "../repositories/wifiRepository.js";
import operationalUtils from "../utils/operationalUtils.js";

export type CreateWifiData = Omit<WifiNetworks, "id">;

const wifiService = {
  create: async (wifiData: CreateWifiData) => {
    const { wifiPassword } = wifiData;

    const hashedPassword = operationalUtils.hashData(wifiPassword);

    const createWifiData: CreateWifiData = {
      ...wifiData,
      wifiPassword: hashedPassword,
    };

    await wifiRepository.create(createWifiData);
  },
};

export default wifiService;
