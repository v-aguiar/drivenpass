import Joi from "joi";

import { SafeNoteBody } from "../controllers/safeNoteController.js";

const createSafeNoteSchema = Joi.object<SafeNoteBody>({
  title: Joi.string().max(50).required().messages({
    "string.max": "⚠ Title must be less than 50 characters...",
    "string.required": "⚠ Title is required...",
    "string.base": "⚠ Title must be a string...",
    "string.empty": "⚠ Title cannot be empty...",
  }),

  note: Joi.string().max(1000).required().messages({
    "string.empty": "⚠ Note cannot be empty...",
    "string.max": "⚠ Note must be less than 1000 characters...",
    "string.required": "⚠ Note is required...",
    "string.base": "⚠ Note must be a string...",
  }),
});

export default createSafeNoteSchema;
