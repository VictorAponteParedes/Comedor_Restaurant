import DessertSchema from "../../models/dessertSchema.js";

const createDessert = async (req, res, next) => {
  try {
    const dessert = await DessertSchema(req.body);
    await dessert.save();
    res.send(dessert);
  } catch (e) {
    res.status(400).json({
      auth: false,
      massage: "Poste ya existe!",
    });
    const newPath = next(e);
    return newPath;
  }
};

export default createDessert;
