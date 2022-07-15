﻿import { SafeNotes } from "@prisma/client";

import safeNoteRepository from "../repositories/safeNoteRepository.js";

export type CreateSafeNoteData = Omit<SafeNotes, "id">;

const safeNoteService = {
  create: async ({ title, note, userId }: CreateSafeNoteData) => {
    const safeNote = await safeNoteRepository.getByTitleAndUserId(title, userId);
    if (safeNote) {
      throw {
        name: "alreadyExists",
        message: "⚠ User already has a safe note with this title!",
      };
    }

    const createSafeNoteData: CreateSafeNoteData = {
      title,
      note,
      userId,
    };

    await safeNoteRepository.create(createSafeNoteData);
  },

  search: async (userId: number) => {
    const safeNotes = await safeNoteRepository.getByUserId(userId);
    if (!safeNotes || safeNotes.length === 0) {
      throw {
        name: "notFound",
        message: "⚠ User does not have any registered safe note!",
      };
    }

    return safeNotes;
  },
};

export default safeNoteService;
