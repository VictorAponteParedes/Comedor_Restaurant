import express from "express";
const route = express.Router();

import deleteByIdFood from "../controllers/food/delete.js";
import getFood from "../controllers/food/get.js";
import getByIdFood from "../controllers/food/getById.js";
import postFood from "../controllers/food/post.js";

route.post("/add-food", postFood);
route.delete("/delete-food/:id", deleteByIdFood);
route.get("/get-food", getFood);
route.get("/get-food/:id", getByIdFood);

export default route;
