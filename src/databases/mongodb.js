import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
const DB_URI = process.env.MONGODB_URI;
try {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const conectionSucceful = mongoose.connection;
  conectionSucceful.once("open", (_) => {
    console.log("Data bases conected to:", DB_URI);
  });
} catch (e) {
  console.error("There is a error ->", DB_URI);
}
