import { Router } from "express";
import mainController from "../controllers/main";

const router = Router();

router.get("/", mainController.index);
router.get("/hb1", mainController.hb1);
router.get('/hb4', mainController.hb4);
router.get("/bemvindo/:nome", mainController.bemvindo);
router.get("/lorem/:qtd", mainController.lorem);

export default router;