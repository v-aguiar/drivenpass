import { Credentials } from "@prisma/client";

import credentialRepository from "../repositories/credentialRepository.js";
import operationalUtils from "../utils/operationalUtils.js";

export type CreateCredentialData = Omit<Credentials, "id">;

const credentialService = {
  create: async ({ label, login, password, url, userId }: CreateCredentialData) => {
    const credential = await credentialRepository.getByLabelAndUserId(label, userId);
    if (credential) {
      throw {
        name: "alreadyExists",
        message: "⚠ User already has a credential with this label!",
      };
    }

    const hashedPassword = operationalUtils.hashData(password);

    const createCredentialData: CreateCredentialData = {
      password: hashedPassword,
      label,
      login,
      url,
      userId,
    };

    await credentialRepository.create(createCredentialData);
  },

  search: async (userId: number) => {
    const credentials = await credentialRepository.getByUserId(userId);
    if (!credentials || credentials.length === 0) {
      throw {
        name: "notFound",
        message: "⚠ User has no credentials!",
      };
    }

    return credentials.map((credential) => {
      return {
        ...credential,
        password: operationalUtils.decryptHash(credential.password),
      };
    });
  },

  searchById: async (id: number, userId: number) => {
    const credential = await credentialRepository.getById(id);
    if (!credential) {
      throw {
        name: "notFound",
        message: "⚠ No credential found with given id!",
      };
    }

    if (credential.userId !== userId) {
      throw {
        name: "unauthorized",
        message: "⚠ Credential does not belong to the user!",
      };
    }

    return credential;
  },
};

export default credentialService;
