import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DrinksSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  taste: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Bebida", DrinksSchema);
