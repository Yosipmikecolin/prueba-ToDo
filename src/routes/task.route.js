import { Router } from "express";
import { controllerGET } from "../controllers/task.controller.js";

const route = Router();

route.get("/tasks", controllerGET);
route.post("/tasks", controllerGET);
route.put("/tasks/:id", controllerGET);
route.delete("/tasks/:id", controllerGET);

export default route;
