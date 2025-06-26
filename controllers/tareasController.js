import Tarea from "../model/Tarea";

export async function getTareas(req, res) {
  const tareas = await Tarea.find();
  console.log(`El numero de tareas es ${tareas.length}`);
  res.json(tareas);
}

export async function addTareas(req, res) {
  let { nombre, descripcion, completed } = req.body;
  let nuevo = new Tarea({ nombre, descripcion, completed });
  await nuevo.save();
  console.log("Se agregaron nuevas tareas");
  console.log(nombre);
  res.status(201).json(nuevo);
}

export async function deleteTareas(req, res) {
  await Tarea.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log(`Se elimino la tarea ${result._id}.`);
      res.json({ message: "Tarea eliminada correctamente" });
    })
    .catch((err) => {
      console.error(`Error al eliminar la tarea ${err}`);
    });
}

// exports.deleteTareas = (req, res) => {
//   let tareaId = req.body.id;
//   let tareaIndex = tareas.findIndex((tarea) => tarea.id === tareaId);
//   if (tareaIndex === -1) {
//     return res.status(404).json({ message: "Tarea no encontrada" });
//   }
//   tareas.splice(tareaIndex, 1);
//   console.log(`Elimino la tarea con el id ${tareaId}`);
//   res.json(tareas);
// };

// Implementación Andrés
// obtiene los parametros del URL
// exports.eliminarTarea = (req, res) => {
//   let id = Number(req.params.id);
//   let tareaExistente = tareas.find((t) => t.id === id);
//   if (!tareaExistente) {
//     return res.status(404).json({ error: "Tarea no encontrada" });
//   }

//   tareas = tareas.filter((t) => t.id !== id); //Usa un filtro en vez de splice, que es mejor?
//   res.json({ message: "Tarea eliminada correctamente" });
// };

export function editarTareas(req, res) {
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
}
