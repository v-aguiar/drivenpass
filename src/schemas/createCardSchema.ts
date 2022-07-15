import Joi from "joi";

import { CreateCardBody } from "../controllers/cardController.js";

const createCardSchema = Joi.object<CreateCardBody>({
  label: Joi.string().required().messages({
    "string.empty": "⚠ Label is required",
    "string.required": "⚠ Label is required",
    "string.base": "⚠ Label must be a string",
  }),

  cardholderName: Joi.string().uppercase().required().messages({
    "string.empty": "⚠ Cardholder name is required",
    "string.required": "⚠ Cardholder name is required",
    "string.base": "⚠ Cardholder name must be a string",
    "string.uppercase": "⚠ Cardholder name must be uppercase",
  }),

  cardNumber: Joi.string()
    .length(16)
    .regex(/^[0-9]*$/)
    .required()
    .messages({
      "string.empty": "⚠ Card number is required",
      "string.required": "⚠ Card number is required",
      "string.length": "⚠ Card number must be 16 digits long",
      "string.regex": "⚠ Card number must be a numeric string",
    }),

  cardPassword: Joi.string()
    .custom((value, helpers) => {
      if (value.length === 4 || value.length === 6) {
        return value;
      }
      return helpers.error("string.length");
    })
    .regex(/^[0-9]*$/)
    .required()
    .messages({
      "string.empty": "⚠ Card password is required",
      "string.required": "⚠ Card password is required",
      "string.length": "⚠ Card password must be 4 or 6 digits long",
      "string.regex": "⚠ Card password must be a numeric string",
    }),

  cardType: Joi.string().valid("credit", "debit", "both").required().messages({
    "string.empty": "⚠ Card type is required",
    "string.required": "⚠ Card type is required",
    "string.base": "⚠ Card type must be a string",
    "any.only": "⚠ Card type must be either credit, debit or both",
  }),

  isVirtual: Joi.boolean().required().messages({
    "boolean.empty": "⚠ Is virtual is required",
    "boolean.required": "⚠ Is virtual is required",
    "boolean.base": "⚠ Is virtual must be a boolean",
  }),

  securityCode: Joi.string()
    .length(3)
    .regex(/^[0-9]*$/)
    .required()
    .messages({
      "string.empty": "⚠ Security code is required",
      "string.required": "⚠ Security code is required",
      "string.length": "⚠ Security code must be 3 digits long",
      "string.regex": "⚠ Security code must be a numeric string",
    }),
});

export default createCardSchema;
