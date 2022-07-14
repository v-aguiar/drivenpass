import { prisma } from "../config/db.js";
import { SignUpData } from "../schemas/signUpSchema.js";

const userRepository = {
  insert: async (data: SignUpData) => {
    await prisma.users.create({
      data: { ...data },
    });
  },

  findByEmail: async (email: string) => {
    return await prisma.users.findUnique({ where: { email } });
  },
};

export default userRepository;
