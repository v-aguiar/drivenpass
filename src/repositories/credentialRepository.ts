import { prisma } from "../config/db.js";
import { CreateCredentialData } from "../services/credentialService.js";

const credentialRepository = {
  create: async (createCredentialData: CreateCredentialData) => {
    await prisma.credentials.create({ data: createCredentialData });
  },

  getByLabelAndUserId: async (label: string, userId: number) => {
    return await prisma.credentials.findFirst({ where: { label, userId } });
  },
};

export default credentialRepository;
