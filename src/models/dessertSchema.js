import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DessertSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Postre", DessertSchema);
