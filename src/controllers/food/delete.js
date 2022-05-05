import Food from "../../models/foodSchema.js";

const deleteByIdFood = async (req, res, next) => {
  try {
    const { id } = req.params;
    const food = await Food.findOneAndDelete(id);
    if (!food) {
      res.status(404).json({
        auth: false,
        massage: "Comida no encontrada para borrarla!",
      });
    }
    res.send("Comida Descartada!");
    next();
  } catch (e) {
    const newLocal = next(e);
    return newLocal;
  }
};

export default deleteByIdFood;
