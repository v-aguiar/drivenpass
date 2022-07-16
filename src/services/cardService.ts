﻿import { Cards } from "@prisma/client";

import cardRepository from "../repositories/cardRepository.js";
import operationalUtils from "../utils/operationalUtils.js";

export type CreateCardData = Omit<Cards, "id">;

const cardService = {
  create: async (cardData: CreateCardData) => {
    const { label, userId, cardPassword, securityCode } = cardData;

    const card = await cardRepository.getByLabelAndUserId(label, userId);
    if (card) {
      throw {
        name: "alreadyExists",
        message: "⚠ User already has a card with this label!",
      };
    }

    const hashedPassword = operationalUtils.hashData(cardPassword);
    const hashedSecurityCode = operationalUtils.hashData(securityCode);

    const createCardData: CreateCardData = {
      ...cardData,
      cardPassword: hashedPassword,
      securityCode: hashedSecurityCode,
    };

    await cardRepository.create(createCardData);
  },

  search: async (userId: number) => {
    const cards = await cardRepository.getByUserId(userId);
    if (!cards || cards.length === 0) {
      throw {
        name: "notFound",
        message: "⚠ User does not have any registered card!",
      };
    }

    return cards;
  },
};

export default cardService;