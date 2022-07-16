import { Router } from "express";

import { create, search, searchById, remove } from "../controllers/cardController.js";

import { validateTokenMiddleware as validateToken } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware as validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import createCardSchema from "../schemas/createCardSchema.js";

const cardRouter = Router();

cardRouter.post("/cards", validateToken, validateSchema(createCardSchema), create);

cardRouter.get("/cards", validateToken, search);
cardRouter.get("/cards/:id", validateToken, searchById);

cardRouter.delete("/cards/:id", validateToken, remove);

export default cardRouter;
