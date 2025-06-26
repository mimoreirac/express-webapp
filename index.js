import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
const app = express();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT || 4000;

mongoose
  .connect(mongoUri)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión en la base de datos", err));

import tareasRoutes from "./routes/tareas.js"

app.use(express.json());
app.use("/tareas", tareasRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
