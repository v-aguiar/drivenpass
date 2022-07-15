import { Router } from "express";

import authRouter from "./authRouter.js";
import cardRouter from "./cardRouter.js";
import credentialRouter from "./credentialRouter.js";
import safeNoteRouter from "./safeNoteRouter.js";

const router = Router();

router.use(authRouter);
router.use(cardRouter);
router.use(credentialRouter);
router.use(safeNoteRouter);

export default router;
