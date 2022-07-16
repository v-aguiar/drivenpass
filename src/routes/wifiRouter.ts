import { Router } from "express";

import { create, search, searchById, remove } from "../controllers/wifiController.js";

import { validateTokenMiddleware as validateToken } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware as validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import createWifiSchema from "../schemas/createWifiSchema.js";

const wifiRouter = Router();

wifiRouter.post("/wifi", validateToken, validateSchema(createWifiSchema), create);

wifiRouter.get("/wifi", validateToken, search);
wifiRouter.get("/wifi/:id", validateToken, searchById);

wifiRouter.delete("/wifi/:id", validateToken, remove);

export default wifiRouter;
