import { faker } from "@faker-js/faker";
import { Users } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import { prisma } from "../../src/config/db.js";

dotenv.config();

const SALT = process.env.SALT || 10;

export async function createUser() {
  const password = faker.internet.password(10);

  const user: Users = {
    email: faker.internet.email(),
    password,
    id: 0,
  };

  const insertedUser = await prisma.users.create({
    data: {
      email: user.email,
      password: await bcrypt.hash(user.password, Number(SALT)),
    },
  });

  user.id = insertedUser.id;

  return user;
}
