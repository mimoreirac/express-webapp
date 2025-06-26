import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  descripcion: { type: String, require: false },
  completed: { type: Boolean, default: false },
  fechaCreacion: { type: Date, default: Date.now },
});

const Tarea = mongoose.model("Tarea", tareaSchema);
export default Tarea;
