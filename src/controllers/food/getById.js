import Food from "../../models/foodSchema.js";

const getByIdFood = async (req, res, next) => {
  try {
    const { id } = req.params;
    const foodId = await Food.findById(id);
    if (foodId) {
      res.send(foodId);
    } else {
      res.status(400).json({
        auth: false,
        massage: "Comida no encontrado!",
      });
    }
  } catch (e) {
    const newLocal = next(e);
    return newLocal;
  }
};

export default getByIdFood;
