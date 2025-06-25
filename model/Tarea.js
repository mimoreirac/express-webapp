const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  descripcion: { type: String, require: false },
  completed: { type: Boolean, default: false },
  fechaCreacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tarea", tareaSchema);
