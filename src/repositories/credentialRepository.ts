import { prisma } from "../config/db.js";
import { CreateCredentialData } from "../services/credentialService.js";

const credentialRepository = {
  create: async (createCredentialData: CreateCredentialData) => {
    await prisma.credentials.create({ data: createCredentialData });
  },

  getById: async (id: number) => {
    return await prisma.credentials.findUnique({ where: { id } });
  },

  getByUserId: async (userId: number) => {
    return await prisma.credentials.findMany({
      where: { userId },
    });
  },

  getByLabelAndUserId: async (label: string, userId: number) => {
    return await prisma.credentials.findFirst({ where: { label, userId } });
  },

  remove: async (id: number) => {
    await prisma.credentials.delete({ where: { id } });
  },
};

export default credentialRepository;
