import Joi from "joi";

import { AuthData } from "../services/userService.js";

const authSchema = Joi.object<AuthData>({
  email: Joi.string().email().required().messages({
    "string.email": "⚠ Email must be a valid one...",
    "string.empty": "⚠ Email is required!",
  }),
  password: Joi.string().min(10).required().messages({
    "string.empty": "⚠ Password is required!",
    "string.base": "⚠ Password must be a string!",
    "string.min": "⚠ Password must be at least 10 characters long!",
  }),
});

export default authSchema;
