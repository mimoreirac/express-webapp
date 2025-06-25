require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT || 4000;

mongoose
  .connect(mongoUri)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión en la base de datos", err));

let tareasRoutes = require("./routes/tareas");

app.use(express.json());
app.use("/tareas", tareasRoutes);

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto 4000");
});
