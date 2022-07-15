import { Router } from "express";

import { validateTokenMiddleware as validateToken } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware as validateSchema } from "../middlewares/validateSchemaMiddleware.js";

import { insert } from "../controllers/credentialController.js";
import createCredentialSchema from "../schemas/createCredentialSchema.js";

const credentialRouter = Router();

credentialRouter.post("/credentials", validateToken, validateSchema(createCredentialSchema), insert);

export default credentialRouter;
