import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  name: {
    type: String,
    requiredPaths: true,
  },
  price: {
    type: String,
    requiredPaths: true,
  },
});

export default mongoose.model("Comida", FoodSchema);
