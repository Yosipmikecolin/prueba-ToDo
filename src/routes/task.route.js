import { Router } from "express";
import {
  controllerGET,
  controllerPOST,
  controllerPUT,
  controllerDELETE,
} from "../controllers/task.controller.js";

const route = Router();

route.get("/tasks", controllerGET);
route.post("/tasks", controllerPOST);
route.put("/tasks/:id", controllerPUT);
route.delete("/tasks/:id", controllerDELETE);

export default route;
