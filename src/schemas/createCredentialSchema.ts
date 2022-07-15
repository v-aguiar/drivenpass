import Joi from "joi";

import { CreateCredentialData } from "../services/credentialService.js";

const createCredentialSchema = Joi.object<CreateCredentialData>({
  label: Joi.string().required().messages({
    "string.required": "⚠ Label is required!",
    "string.base": "⚠ Label must be a string!",
  }),

  url: Joi.string().uri().required().messages({
    "string.required": "⚠ URL is required!",
    "string.uri": "⚠ URL must be a valid URL!",
    "string.base": "⚠ URL must be a string!",
  }),

  login: Joi.string().required().messages({
    "string.required": "⚠ Login is required!",
    "string.base": "⚠ Login must be a string!",
  }),

  password: Joi.string().required().messages({
    "string.required": "⚠ Password is required!",
    "string.base": "⚠ Password must be a string!",
  }),

  userId: Joi.number().required().messages({
    "number.required": "⚠ User ID is required!",
    "number.base": "⚠ User ID must be a number!",
  }),
});

export default createCredentialSchema;
