import { Router } from "express";
import {
  controllerGET,
  controllerPOST,
} from "../controllers/task.controller.js";

const route = Router();

route.get("/tasks", controllerGET);
route.post("/tasks", controllerPOST);
route.put("/tasks/:id", controllerGET);
route.delete("/tasks/:id", controllerGET);

export default route;
