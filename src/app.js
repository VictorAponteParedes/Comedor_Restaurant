// Importaciones de Archivos Internos
import express from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";

//Middwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

//Databases
import "./databases/mongodb.js";

//! Importaciones de Archivos Externos
import routeCliente from "./routes/clientes.js";
import routeBebida from "./routes/bebidas.js";
import routeComida from "./routes/comida.js";
import routePostre from "./routes/postre.js";

//Route universal
app.use("/api", routeCliente, routeComida, routeBebida, routePostre);

export default app;
