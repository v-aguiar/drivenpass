import { prisma } from "../config/db.js";
import bcrypt from "bcrypt";

import { SignUpData } from "../schemas/signUpSchema.js";
import userRepository from "../repositories/userRepository.js";

const userService = {
  signUp: async ({ email, password }: SignUpData) => {
    const user = await prisma.users.findUnique({ where: { email } });
    if (user) {
      throw {
        name: "alreadyExists",
        message: "⚠ User already exists!",
      };
    }

    const salt = process.env.SALT || 10;
    const hashedPassword = await bcrypt.hash(password, Number(salt));

    const newUserData: SignUpData = {
      email,
      password: hashedPassword,
    };

    await userRepository.insert(newUserData);
  },
};

export default userService;
