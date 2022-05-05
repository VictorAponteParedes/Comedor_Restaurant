import Drink from "../../models/drinks.js";

const createDrink = async (req, res, next) => {
  try {
    const drink = Drink(req.body);
    await drink.save();
    res.send(drink);
  } catch (e) {
    res.status(400).json({
      auth: false,
      massage: "Bebida ya existe en la lista!",
    });
    const newLocal = next(e);
    return newLocal;
  }
};

export default createDrink;
