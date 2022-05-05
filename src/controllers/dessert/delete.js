import DessertSchema from "../../models/dessertSchema.js";

const deleteDessert = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dessert = await DessertSchema.findByIdAndDelete(id);
    if (!dessert) {
      res.status(400).json({
        auth: false,
        massage: "El postre no pudo ser descartado porque ya lo fue!",
      });
    } else {
      return res.send("Postre descartado!");
    }
  } catch (e) {
    const newPath = next(e);
    return newPath;
  }
};
export default deleteDessert;
