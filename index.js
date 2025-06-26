import { dotenv } from "config";
import { express } from "express";
import { mongoose } from "mongoose";

const app = express();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT || 4000;

mongoose
  .connect(mongoUri)
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.error("Error de conexión en la base de datos", err));

const tareasRoutes = require("./routes/tareas");

app.use(express.json());
app.use("/tareas", tareasRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
