import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "../database/tasks.json");

export const controllerGET = (_req, res) => {
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
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title are required" });
  }

  // * LEER EL ARCHIVO tasks.json
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

    // * CREAR LA NUEVA TAREA
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
    };

    // * AGREGAR LA NUEVA TAREA AL ARRAY DE LAS TAREAS
    tasks.push(newTask);

    // * ESCRIBIR LAS TAREAS ACTUALIZADAS EN EL ARCHIVO
    fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
        return res.status(500).send("Error writing file");
      }

      // * ENVIAR RESPUESTA DE ÉXITO
      res.status(201).json(newTask);
    });
  });
};

export const controllerPUT = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) {
    return res
      .status(400)
      .json({ error: "At least one of title or message is required" });
  }

  // * LEER EL ARCHIVO tasks.json
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

    // * BUSCAR LA TAREA CON EL ID ESPECIFCADO
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id, 10));

    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    // * ACTUALIZAR LA TAREA
    if (title) {
      tasks[taskIndex].title = title;
    }

    // * ESCRIBIR EL ARCHIVO CON LA TAREA ACTUALIZADA
    fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
        return res.status(500).send("Error writing file");
      }

      // * ENVIAR RESPUESTA CON ÉXITO
      res.status(200).json(tasks[taskIndex]);
    });
  });
};

export const controllerDELETE = (req, res) => {
  const { id } = req.params;

  // * LEER EL ARCHIVO tasks.json
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

    // * BUSCAR EL INDICE DE LA TAREA CON EL ID QUE LLEGA POR PARAMETRO
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id, 10));

    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    // * ELIMINAR LA TAREA DEL ARRAY
    tasks.splice(taskIndex, 1);

    // * ESCRIV¿BIR EL ARCHIVO CON LAS TAREAS ACTUALIZADAS
    fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
        return res.status(500).send("Error writing file");
      }

      // * ENVIAR RESPUESTA CON ÉXITO
      res.status(204).send();
    });
  });
};
