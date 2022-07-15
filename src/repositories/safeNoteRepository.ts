import { prisma } from "../config/db.js";

import { CreateSafeNoteData } from "../services/safeNoteService.js";

const safeNoteRepository = {
  create: async (createSafeNoteData: CreateSafeNoteData) => {
    await prisma.safeNotes.create({ data: { ...createSafeNoteData } });
  },

  getById: async (id: number) => {
    return await prisma.safeNotes.findUnique({ where: { id } });
  },

  getByUserId: async (userId: number) => {
    return await prisma.safeNotes.findMany({ where: { userId } });
  },

  getByTitleAndUserId: async (title: string, userId: number) => {
    return await prisma.safeNotes.findFirst({ where: { title, userId } });
  },

  remove: async (id: number) => {
    await prisma.safeNotes.delete({ where: { id } });
  },
};

export default safeNoteRepository;
