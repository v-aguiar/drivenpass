import { Router } from "express";

import { validateTokenMiddleware as validateToken } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware as validateSchema } from "../middlewares/validateSchemaMiddleware.js";

import { insert, remove, search, searchById } from "../controllers/credentialController.js";
import createCredentialSchema from "../schemas/createCredentialSchema.js";

const credentialRouter = Router();

credentialRouter.post("/credentials", validateToken, validateSchema(createCredentialSchema), insert);

credentialRouter.get("/credentials", validateToken, search);
credentialRouter.get("/credentials/:id", validateToken, searchById);

credentialRouter.delete("/credentials/:id", validateToken, remove);

export default credentialRouter;
