import Food from "../../models/foodSchema.js";

const getFood = async (req, res, next) => {
  try {
    const food = await Food.find();
    if (food) {
      res.send(food);
    } else {
      res.status(404).res.send("Comida no encontrada!");
    }
  } catch (e) {
    const newLocal = next(e);
    return newLocal;
  }
};

export default getFood;
