import { prisma } from "../config/db.js";

import { CreateCardData } from "../services/cardService.js";

const cardRepository = {
  create: async (createCardData: CreateCardData) => {
    await prisma.cards.create({ data: { ...createCardData } });
  },

  getByUserId: async (userId: number) => {
    const cards = await prisma.cards.findMany({
      where: { userId },
    });
    return cards;
  },

  getByLabelAndUserId: async (label: string, userId: number) => {
    return await prisma.cards.findFirst({ where: { label, userId } });
  },
};

export default cardRepository;
