const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
};

exports.getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.status(200).json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
};