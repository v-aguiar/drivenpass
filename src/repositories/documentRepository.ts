import { prisma } from "../config/db.js";

import { CreateDocumentData } from "../services/documentService.js";

const documentRepository = {
  create: async (documentData: CreateDocumentData) => {
    await prisma.document.create({ data: { ...documentData } });
  },

  getById: async (id: number) => {
    return await prisma.document.findUnique({ where: { id } });
  },

  getByUserId: async (userId: number) => {
    return await prisma.document.findMany({
      where: { userId },
    });
  },

  getByLabelAndUserId: async (label: string, userId: number) => {
    return await prisma.document.findFirst({ where: { label, userId } });
  },

  remove: async (id: number) => {
    await prisma.document.delete({ where: { id } });
  },
};

export default documentRepository;
