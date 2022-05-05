import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config;

export default function varifyToken(req, res, next) {
  const token = req.headers["x-accesss-token"];
  if (!token) {
    return res.status(401).json({
      auth: false,
      massage: "No tienes acceso!",
    });
  }
  const decoder = jwt.verify(token, process.env.PASSWORD);
  req.clienteId = decoder.id;
  next();
}
