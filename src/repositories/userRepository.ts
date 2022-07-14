import { prisma } from "../config/db.js";
import { AuthData } from "../services/userService.js";

const userRepository = {
  insert: async (data: AuthData) => {
    await prisma.users.create({
      data: { ...data },
    });
  },

  findByEmail: async (email: string) => {
    return await prisma.users.findUnique({ where: { email } });
  },
};

export default userRepository;
