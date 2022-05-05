import express from "express";
const route = express.Router();

import createDessert from "../controllers/dessert/post.js";
import getDessert from "../controllers/dessert/get.js";
import deleteDessert from "../controllers/dessert/delete.js";
import getByIdDessert from "../controllers/dessert/getById.js";

route.post("/add-dessert", createDessert);
route.get("/get-dessert", getDessert);
route.delete("/delete-dessert/:id", deleteDessert);
route.get("/get-dessert/:id", getByIdDessert);
export default route;
