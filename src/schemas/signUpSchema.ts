import Joi from "joi";
import { Users } from "@prisma/client";

export type SignUpData = Omit<Users, "id">;

const signUpSchema = Joi.object<SignUpData>({
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

export default signUpSchema;
