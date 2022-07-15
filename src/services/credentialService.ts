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
};

export default credentialService;
