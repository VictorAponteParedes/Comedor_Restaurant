import Drink from "../../models/drinks.js";

const getByIdDrink = async (req, res, next) => {
  try {
    const { id } = req.params;
    const drinkId = await Drink.findById(id);
    if (drinkId) {
      res.send(drinkId).json({
        massage: "Bebida Obtenido",
      });
    } else {
      res.status(400).json({
        auth: false,
        massage: "Bebida no encontrado!",
      });
    }
  } catch (e) {
    const newLocal = next(e);
    return newLocal;
  }
};

export default getByIdDrink;
