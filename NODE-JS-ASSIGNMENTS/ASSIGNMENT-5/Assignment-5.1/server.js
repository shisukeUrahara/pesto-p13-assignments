const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware for parsing POST requests
app.use(bodyParser.json());
// middleware to log details
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Data storage for our tasks
let tasks = [];
let taskId = 1; // To simulate auto-incrementing ID

//  Routes

//  get list of tasks
app.get("/api/v1/tasks", (req, res) => {
  res.json({ tasks });
});

//  add a new task
app.post("/api/v1/tasks", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .send({ error: "Title and Description are required!" });
  }

  const newTask = {
    id: taskId++,
    title,
    description,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).send(newTask);
});

//  get task by id
app.get("/api/v1/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send({ error: "Task not found!" });
  res.send(task);
});

//  update tasks details
app.put("/api/v1/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send({ error: "Task not found!" });

  const { title, description, completed } = req.body;

  if (title) task.title = title;
  if (description) task.description = description;
  if (typeof completed === "boolean") task.completed = completed;

  res.send(task);
});

//  delete a task
app.delete("/api/v1/tasks/:id", (req, res) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send({ error: "Task not found!" });

  const deletedTask = tasks.splice(index, 1);
  res.send(deletedTask[0]);
});

//  route to handle errors
app.use((req, res) => {
  res.status(404).send({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
