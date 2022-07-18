import Joi from "joi";

import { CreateDocumentBody } from "../controllers/documentController.js";

const createDocumentSchema = Joi.object<CreateDocumentBody>({
  label: Joi.string().required().messages({
    "string.empty": "⚠ Label is required!",
    "string.required": "⚠ Label is required!",
    "string.base": "⚠ Label must be a string!",
  }),

  creationDate: Joi.string().required().messages({
    "date.empty": "⚠ Creation date is required!",
    "date.required": "⚠ Creation date is required!",
    "date.base": "⚠ Creation date must be a date!",
  }),

  expirationDate: Joi.string().required().messages({
    "date.empty": "⚠ Expiration date is required!",
    "date.required": "⚠ Expiration date is required!",
    "date.base": "⚠ Expiration date must be a date!",
  }),

  issuingBody: Joi.string().max(20).required().messages({
    "string.empty": "⚠ Issuing body is required!",
    "string.required": "⚠ Issuing body is required!",
    "string.base": "⚠ Issuing body must be a string!",
    "string.max": "⚠ Issuing body must be less than 20 characters!",
  }),

  name: Joi.string().required().messages({
    "string.empty": "⚠ Name is required!",
    "string.required": "⚠ Name is required!",
    "string.base": "⚠ Name must be a string!",
  }),

  number: Joi.number().required().messages({
    "string.empty": "⚠ Number is required!",
    "string.required": "⚠ Number is required!",
    "string.base": "⚠ Number must be a string!",
    "string.regex": "⚠ Number must be a numeric string!",
  }),

  type: Joi.string().valid("rg", "cnh").required().messages({
    "string.empty": "⚠ Type is required!",
    "string.required": "⚠ Type is required!",
    "string.base": "⚠ Type must be a string!",
    "any.only": "⚠ Type must be either rg or cnh!",
  }),
});

export default createDocumentSchema;
