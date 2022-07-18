import { Document } from "@prisma/client";

import documentRepository from "../repositories/documentRepository.js";

export type CreateDocumentData = Omit<Document, "id">;

const documentService = {
  create: async (documentData: CreateDocumentData) => {
    const { label, userId } = documentData;

    const document = await documentRepository.getByLabelAndUserId(label, userId);
    if (document) {
      throw {
        name: "alreadyExists",
        message: "⚠ User already has a document with this label!",
      };
    }

    await documentRepository.create(documentData);
  },
};

export default documentService;
