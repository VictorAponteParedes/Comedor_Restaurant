import Cliente from "../../models/clienteSchema.js";
import dotenv from "dotenv";
dotenv.config;
import verifyToken from "../../validation/verifyToken.js";

const getCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findById(req.clienteId, { password: 0 });
    if (!cliente) {
      res.status(404).send("Cliente no encontrado");
    }
    res.json(cliente);
  } catch (erro) {
    return next(erro);
  }
};
export default getCliente;
