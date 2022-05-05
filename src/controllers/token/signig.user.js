import jwt from "jsonwebtoken";
import Cliente from "../../models/clienteSchema.js";
import dotenv from "dotenv";
dotenv.config;
const siging = async (req, res, next) => {
  const { email, password } = req.body;
  const cliente = await Cliente.findOne({ email: email });
  if (!cliente) {
    return res.status(404).send("Email no existe");
  }

  const passwordIsValidete = await cliente.validatePassword(password);
  if (!passwordIsValidete) {
    return res.status(401).json({ auth: false, token: null });
  }
  const token = jwt.sign({ id: cliente._id }, process.env.PASSWORD, {
    expiresIn: 60 * 60 * 24,
  });

  res.json({ auth: true, token });
};
export default siging;
