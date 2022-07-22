import { prisma } from "../src/config/db.js";

async function main() {
  const EMAIL = "email@teste.com";

  await prisma.users.upsert({
    where: {
      email: EMAIL,
    },
    update: {},
    create: {
      email: EMAIL,
      password: "senhadedezdigitos",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
  });
