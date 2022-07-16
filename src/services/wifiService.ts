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

  search: async (userId: number) => {
    const wifiNetworks = await wifiRepository.getByUserId(userId);
    if (!wifiNetworks || wifiNetworks.length === 0) {
      throw {
        name: "notFound",
        message: "⚠ User has no wifi networks registered!",
      };
    }

    return wifiNetworks.map((wifiNetwork) => {
      return {
        ...wifiNetwork,
        wifiPassword: operationalUtils.decryptHash(wifiNetwork.wifiPassword),
      };
    });
  },

  searchById: async (userId: number, id: number) => {
    const wifiNetwork = await wifiRepository.getById(id);
    if (!wifiNetwork) {
      throw {
        name: "notFound",
        message: "⚠ Wifi network not found!",
      };
    }

    if (wifiNetwork.userId !== userId) {
      throw {
        name: "unauthorized",
        message: "⚠ User not authorized to access this wifi network!",
      };
    }

    wifiNetwork.wifiPassword = operationalUtils.decryptHash(wifiNetwork.wifiPassword);

    return wifiNetwork;
  },
};

export default wifiService;
