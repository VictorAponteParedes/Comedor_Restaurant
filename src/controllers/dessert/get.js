import fetch from "node-fetch";
import DessertSchema from "../../models/dessertSchema.js";
const getDessert = async (req, res, next) => {
  try {
    const dessert = await DessertSchema.find();
    if (!dessert) {
      res.status(400).json({
        auth: false,
        massage: "Postres no encontrado!",
      });
    } else {
      const resul = res.send(dessert);
      return resul;
    }
  } catch (e) {
    const newPath = next(e);
    return newPath;
  }
};
export default getDessert;
