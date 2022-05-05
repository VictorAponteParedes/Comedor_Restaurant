import DessertSchema from "../../models/dessertSchema.js";

export default async function getByIdDessert(req, res, next) {
  try {
    const { id } = req.params;
    const dessert = await DessertSchema.findById(id);
    if (!dessert) {
      res.status(404).json({
        auth: false,
        massage: "Postre no encontrado!",
      });
    } else {
      const resul = res.send(dessert);
      return resul;
    }
  } catch (e) {
    const newLocal = next(e);
    return newLocal;
  }
}
