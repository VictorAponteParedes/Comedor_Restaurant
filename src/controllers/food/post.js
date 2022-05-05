import Food from "../../models/foodSchema.js";

const createFood = async (req, res, next) => {
  try {
    const food = await Food(req.body);
    await food.save();
    res.send(food);
  } catch (e) {
    res.status(400).json({
      auth: false,
      massage: "Comida ya esta existe en la lista!",
    });

    const newLocal = next(e);
    return newLocal;
  }
};

export default createFood;
