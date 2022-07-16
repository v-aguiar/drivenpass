import { Router } from "express";

import authRouter from "./authRouter.js";
import cardRouter from "./cardRouter.js";
import credentialRouter from "./credentialRouter.js";
import safeNoteRouter from "./safeNoteRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();

router.use(authRouter);
router.use(cardRouter);
router.use(credentialRouter);
router.use(safeNoteRouter);
router.use(wifiRouter);

export default router;
