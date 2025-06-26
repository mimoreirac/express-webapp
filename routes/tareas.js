import express from "express";
import { getTareas, addTareas, deleteTareas, editarTareas } from "../controllers/tareasController.js";

const router = express.Router();

router.get("/matematicas", (req, res) => {
  console.log("RECIBI OTRO REQUEST");
  res.json(`{"nota":"10"}`);
});

router.get("/test", (req, res) => {
  console.log("Testing ruta test")
  res.json(`{"test":"testing"}`);
});

router.get("/", getTareas);

router.post("/", addTareas);

router.delete("/:id", deleteTareas);
// router.delete("/:id", tareasController.eliminarTarea);
router.patch("/:id", editarTareas);

export default router;
