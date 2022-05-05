import Drink from "../../models/drinks.js";

const deleteByIdDrink = async (req, res, next) => {
  try {
    const { id } = req.params;
    const drink = await Drink.findByIdAndDelete(id);
    if (!drink) {
      res.status(400).json({
        auth: false,
        massage: "Bebida no encontrada para borrarla!",
      });
    } else {
      return res.send("Bebida Descartada!");
    }
  } catch (e) {
    const newPath = next(e);
    return newPath;
  }
};

export default deleteByIdDrink;
