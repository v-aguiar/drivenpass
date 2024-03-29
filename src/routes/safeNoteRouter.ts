﻿import { Router } from "express";

import { create, search, searchById, remove } from "../controllers/safeNoteController.js";

import { validateTokenMiddleware as validateToken } from "../middlewares/validateTokenMiddleware.js";
import { validateSchemaMiddleware as validateSchema } from "../middlewares/validateSchemaMiddleware.js";
import createSafeNoteSchema from "../schemas/createSafeNoteSchema.js";

const safeNoteRouter = Router();

safeNoteRouter.post("/safe-notes", validateToken, validateSchema(createSafeNoteSchema), create);

safeNoteRouter.get("/safe-notes", validateToken, search);
safeNoteRouter.get("/safe-notes/:id", validateToken, searchById);

safeNoteRouter.delete("/safe-notes/:id", validateToken, remove);

export default safeNoteRouter;
