import { Router } from "express";

import { create, search } from "../controllers/documentController.js";

import { validateTokenMiddleware as validateToken } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware as validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import createDocumentSchema from "../schemas/createDocumentSchema.js";

const documentRouter = Router();

documentRouter.post("/documents", validateToken, validateSchema(createDocumentSchema), create);

documentRouter.get("/documents", validateToken, search);
// documentRouter.get("/documents/:id", validateToken, searchById);

// documentRouter.delete("/documents/:id", validateToken, remove);

export default documentRouter;
