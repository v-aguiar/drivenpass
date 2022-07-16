import Joi from "joi";

import { CreateWifiBody } from "../controllers/wifiController.js";

const createWifiSchema = Joi.object<CreateWifiBody>({
  label: Joi.string().required().messages({
    "string.empty": "⚠ Label is required",
    "string.required": "⚠ Label is required",
    "string.base": "⚠ Label must be a string",
  }),

  wifiName: Joi.string().required().messages({
    "string.empty": "⚠ Wifi name is required",
    "string.required": "⚠ Wifi name is required",
    "string.base": "⚠ Wifi name must be a string",
  }),

  wifiPassword: Joi.string().required().messages({
    "string.empty": "⚠ Wifi password is required",
    "string.required": "⚠ Wifi password is required",
    "string.base": "⚠ Wifi password must be a string",
  }),
});

export default createWifiSchema;
