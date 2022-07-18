import { Document } from "@prisma/client";

import documentRepository from "../repositories/documentRepository.js";
import userRepository from "../repositories/userRepository.js";

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

  search: async (userId: number) => {
    const documents = await documentRepository.getByUserId(userId);
    if (!documents || documents.length === 0) {
      throw {
        name: "notFound",
        message: "⚠ User does not have any registered document!",
      };
    }

    return documents;
  },

  searchById: async (userId: number, id: number) => {
    const document = await documentRepository.getById(id);
    if (!document) {
      throw {
        name: "notFound",
        message: "⚠ No document found with given id!",
      };
    }

    const user = await userRepository.findById(userId);
    if (!user) {
      throw {
        name: "notFound",
        message: "⚠ No user found with given id!",
      };
    }

    if (document.userId !== user.id) {
      throw {
        name: "unauthorized",
        message: "⚠ Document does not belong to the user!",
      };
    }

    return document;
  },
};

export default documentService;
