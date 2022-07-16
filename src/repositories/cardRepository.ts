import { prisma } from "../config/db.js";

import { CreateCardData } from "../services/cardService.js";

const cardRepository = {
  create: async (createCardData: CreateCardData) => {
    await prisma.cards.create({ data: { ...createCardData } });
  },

  getById: async (id: number) => {
    return await prisma.cards.findUnique({ where: { id } });
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

  remove: async (id: number) => {
    await prisma.cards.delete({ where: { id } });
  },
};

export default cardRepository;
