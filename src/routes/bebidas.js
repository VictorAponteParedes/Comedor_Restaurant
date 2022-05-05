import express from "express";
const route = express.Router();

import postDrink from "../controllers/drink/post.js";
import getDrink from "../controllers/drink/get.js";
import getByIdDrink from "../controllers/drink/getById.js";
import deleteByIdDrink from "../controllers/drink/delete.js";

route.post("/add-drink", postDrink);
route.get("/get-drink", getDrink);
route.get("/get-drink/:id", getByIdDrink);
route.delete("/delete-drink/:id", deleteByIdDrink);

export default route;
