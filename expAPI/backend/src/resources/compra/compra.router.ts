import { Router } from "express";
import compraController from "./compra.controller";
import { isAuth } from "../../middlewares/isAuth";

const router = Router();

router.get("/", isAuth, compraController.index);
router.post("/", isAuth, compraController.create);
router.delete("/:id", isAuth, compraController.remove);

export default router;
