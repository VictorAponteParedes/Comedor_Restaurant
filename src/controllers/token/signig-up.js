import Cliente from "../../models/clienteSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config;
const sigingUp = async (req, res, next) => {
  const { username, email, phone, password } = req.body;
  const cliente = new Cliente({
    username: username,
    email: email,
    phone: phone,
    password: password,
  });
  cliente.password = await cliente.encryptPassword(cliente.password);
  await cliente.save();

  const token = jwt.sign({ id: cliente._id }, process.env.PASSWORD, {
    expiresIn: 60 * 60 * 24, // equivale a un dia de vencimiento!
  });

  res.json({ auth: true, token: token });
};
export default sigingUp;
