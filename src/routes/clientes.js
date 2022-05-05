import { Router } from "express";
const route = Router();
import verifyToken from "../validation/verifyToken.js";
////////
// signig cliente
import creandoClient from "../controllers/token/signig.user.js";
// get cliente
import getCliente from "../controllers/token/get.js";
// sign-up
import signupCliente from "../controllers/token/signig-up.js";

//Route Crear Clientes
route.post("/signig", creandoClient);
//Route GetId Clientes
route.get("/me", verifyToken, getCliente);
//Route Get Cliente
route.post("/sign-up", signupCliente);

export default route;
