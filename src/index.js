import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();

//VARS
app.set("port", process.env.PORT || 4000);

//MIDLEWARES
app.use(express.json());
app.use(cors());

//SERVER
app.listen(app.get("port"), () => {
  console.log("Server run port", app.get("port"));
});
