import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const controllerGET = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "../database/tasks.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading file");
    } else {
      if (data) {
        res.json(JSON.parse(data));
      } else {
        res.json(JSON.parse("[]"));
      }
    }
  });
};
