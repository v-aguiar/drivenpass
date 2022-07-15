import { prisma } from "../config/db.js";

import { CreateSafeNoteData } from "../services/safeNoteService.js";

const safeNoteRepository = {
  create: async (createSafeNoteData: CreateSafeNoteData) => {
    await prisma.safeNotes.create({ data: { ...createSafeNoteData } });
  },

  getByTitleAndUserId: async (title: string, userId: number) => {
    return await prisma.safeNotes.findFirst({ where: { title, userId } });
  },

  getByUserId: async (userId: number) => {
    return await prisma.safeNotes.findMany({ where: { userId } });
  },
};

export default safeNoteRepository;
