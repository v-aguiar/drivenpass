import { prisma } from "../config/db.js";

import { CreateWifiData } from "../services/wifiService.js";

const wifiRepository = {
  create: async (createWifiData: CreateWifiData) => {
    await prisma.wifiNetworks.create({ data: { ...createWifiData } });
  },

  getById: async (id: number) => {
    return await prisma.wifiNetworks.findUnique({ where: { id } });
  },

  getByUserId: async (userId: number) => {
    const wifiNetworks = await prisma.wifiNetworks.findMany({
      where: { userId },
    });
    return wifiNetworks;
  },

  getByLabelAndUserId: async (label: string, userId: number) => {
    return await prisma.wifiNetworks.findFirst({ where: { label, userId } });
  },

  remove: async (id: number) => {
    await prisma.wifiNetworks.delete({ where: { id } });
  },
};

export default wifiRepository;
