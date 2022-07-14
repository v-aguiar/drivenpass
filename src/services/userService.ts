import { prisma } from "../config/db.js";
import { Users } from "@prisma/client";
import bcrypt from "bcrypt";

import userRepository from "../repositories/userRepository.js";
import userUtils from "../utils/userUtils.js";
import sessionRepository from "../repositories/sessionRepository.js";

export type AuthData = Omit<Users, "id">;

const userService = {
  signUp: async ({ email, password }: AuthData) => {
    const user = await prisma.users.findUnique({ where: { email } });
    if (user) {
      throw {
        name: "alreadyExists",
        message: "⚠ User already exists!",
      };
    }

    const salt = process.env.SALT || 10;
    const hashedPassword = await bcrypt.hash(password, Number(salt));

    const newUserData: AuthData = {
      email,
      password: hashedPassword,
    };

    await userRepository.insert(newUserData);
  },

  createSession: async ({ email, password }: AuthData) => {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw {
        name: "unauthorized",
        message: "⚠ Invalid email or password!",
      };
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw {
        name: "unauthorized",
        message: "⚠ Invalid email or password!",
      };
    }

    await sessionRepository.create(user.id);
    const token = userUtils.generateToken(user.id);

    return token;
  },
};

export default userService;
