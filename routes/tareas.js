let express = require("express");
let tareasController = require("../controllers/tareasController.js");

let router = express.Router();

router.get("/matematicas", (req, res) => {
  console.log("RECIBI OTRO REQUEST");
  res.json(`{"nota":"10"}`);
});

router.get("/test", (req, res) => {
  console.log("Testing ruta test")
  res.json(`{"test":"testing"}`);
});

router.get("/", tareasController.getTareas);

router.post("/", tareasController.addTareas);

router.delete("/", tareasController.deleteTareas);
router.delete("/:id", tareasController.eliminarTarea);
router.patch("/:id", tareasController.editarTareas);

module.exports = router;
