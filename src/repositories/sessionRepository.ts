import { prisma } from "../config/db.js";

const sessionRepository = {
  create: async (userId: number) => {
    await prisma.sessions.create({ data: { userId } });
  },

  findByUserId: async (userId: number) => {
    return await prisma.sessions.findFirst({ where: { userId } });
  },
};

export default sessionRepository;
