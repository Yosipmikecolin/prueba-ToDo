import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const controllerGET = (_req, res) => {
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

export const controllerPOST = (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "../database/tasks.json");
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title are required" });
  }

  // * READ THE FILE tasks.json
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error reading file");
    }

    let tasks;
    try {
      tasks = JSON.parse(data);
    } catch (parseErr) {
      console.error(parseErr);
      return res.status(500).send("Error parsing JSON");
    }

    // * CREATE A NEW TASK
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
    };

    // * ADD THE NEW TASK TO THE TASK ARRAY
    tasks.push(newTask);

    // * WRITE UPDATED TASKS TO THE FILE
    fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
        return res.status(500).send("Error writing file");
      }

      // * SEND SUCCESS RESPONSE
      res.status(201).json(newTask);
    });
  });
};
