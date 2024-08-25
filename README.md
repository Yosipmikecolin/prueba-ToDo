# Prueba técnica de Node con Express

**Task API** es una API RESTful para gestionar tareas en formato JSON. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre un archivo `tasks.json` que actúa como la base de datos. Esta API está diseñada para permitir la administración eficiente de tareas mediante una interfaz simple y directa.


## Características ✨

- **Crear Tareas**: Permite añadir nuevas tareas con un título.
- **Leer Tareas**: Recupera todas las tareas almacenadas en el archivo `tasks.json`.
- **Actualizar Tareas**: Permite modificar el título de una tarea existente.
- **Eliminar Tareas**: Permite eliminar una tarea específica basada en su ID.
- **Validación de Entradas**: Valida la existencia de parámetros y datos necesarios para cada operación.
  

## Estructura del Proyecto 🛞

  - `controllers/`:  Carpeta que contiene los controladores de los métodos HTTP de la API, responsables de manejar las solicitudes y respuestas.
  - `database/`: Carpeta que almacena el archivo tasks.json, que actúa como base de datos para las tareas.
  - `routes/`: Carpeta que define las rutas de la API para las tareas, incluyendo los métodos HTTP correspondientes.
  - `index.js`: Archivo principal de la API, que sirve como punto de entrada para configurar las rutas, middleware y el puerto en el que se ejecutará la API.


## Requisitos Previos 🧩

- **Node.js**: La API está construida sobre Node.js. Asegúrate de tener Node.js instalado en tu máquina.
   
  

## Ejecutar 

1. Clonar el Repositorio e instala las dependencias [https://github.com/Yosipmikecolin/prueba-ToDo.git](https://github.com/Yosipmikecolin/prueba-ToDo.git)
   ```bash
   npm install
   npm run dev

## Video de funcionamiento 📹

Video del funcionamiento completo de la API ToDo

[https://drive.google.com/file/d/1FmJPIwwJSAR5LGHnxlD7EYF1vCGi3J4v/view?usp=sharing](https://drive.google.com/file/d/1FmJPIwwJSAR5LGHnxlD7EYF1vCGi3J4v/view?usp=sharing)

