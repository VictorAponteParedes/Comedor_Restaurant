import mongoose from "mongoose";
const Schema = mongoose.Schema;
import bcrypt from "bcryptjs";

const ClienteSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

ClienteSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};
ClienteSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};
export default mongoose.model("Cliente", ClienteSchema);
