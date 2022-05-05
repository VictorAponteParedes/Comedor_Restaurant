import Drink from "../../models/drinks.js";

const getDrink = async (req, res, next) => {
  try {
    const drink = await Drink.find();
    if (drink) {
      res.send(drink);
    } else {
      res.status(404).res.send("bebida no encontrada!");
    }
  } catch (e) {
    const newLocal = next(e);
    return newLocal;
  }
};

export default getDrink;
