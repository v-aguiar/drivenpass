import { faker } from "@faker-js/faker";

import { prisma } from "../../src/config/db.js";
import cryptr from "../../src/config/cryptr.js";

import { CreateCardData } from "../../src/services/cardService.js";

export async function createCard(userId: number) {
  const card: CreateCardData = {
    label: faker.random.words(),
    cardholderName: faker.name.findName().toUpperCase(),
    cardNumber: faker.finance.creditCardNumber("16"),
    cardPassword: faker.finance.pin(),
    cardType: faker.helpers.arrayElement(["credit", "debit", "both"]),
    isVirtual: faker.datatype.boolean(),
    securityCode: faker.finance.creditCardCVV(),
    userId,
  };

  const insertedCard = await prisma.cards.create({
    data: {
      ...card,
      cardPassword: cryptr.encrypt(card.cardPassword),
      securityCode: cryptr.encrypt(card.securityCode),
    },
  });

  return { ...card, cardId: insertedCard.id };
}
