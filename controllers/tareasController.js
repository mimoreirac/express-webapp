let tareas = [];

exports.getTareas = (req, res) => {
  console.log(`El numero de tareas es ${tareas.length}`);
  res.json(tareas);
};

exports.addTareas = (req, res) => {
  let { nombre, completed } = req.body;
  let nuevo = { id: Date.now(), nombre, completed };
  tareas.push(nuevo);
  console.log("Se agregaron nuevas tareas");
  console.log(nombre);
  res.status(201).json(nuevo);
};

exports.deleteTareas = (req, res) => {
  let tareaId = req.body.id;
  let tareaIndex = tareas.findIndex((tarea) => tarea.id === tareaId);
  if (tareaIndex === -1) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }
  tareas.splice(tareaIndex, 1);
  console.log(`Elimino la tarea con el id ${tareaId}`);
  res.json(tareas);
};

// Implementación Andrés
// obtiene los parametros del URL
exports.eliminarTarea = (req, res) => {
  let id = Number(req.params.id);
  let tareaExistente = tareas.find((t) => t.id === id);
  if (!tareaExistente) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  tareas = tareas.filter((t) => t.id !== id); //Usa un filtro en vez de splice, que es mejor?
  res.json({ message: "Tarea eliminada correctamente" });
};

exports.editarTareas = (req, res) => {
  let tareaId = Number(req.params.id);
  let tareaIndex = tareas.findIndex((tarea) => tarea.id === tareaId);
  if (tareaIndex === -1) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }
  tareas.splice(tareaIndex, 1);
  let { nombre, completed } = req.body;
  let nuevo = { id: tareaId, nombre, completed };
  tareas.push(nuevo);
  console.log(nombre);
  res.status(201).json(nuevo);
};
