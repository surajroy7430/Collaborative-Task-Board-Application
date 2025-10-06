const Board = require("../models/board.model");
const Task = require("../models/task.model");

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({ tasks });
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({ msg: "Task Created", task });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(id, req.body);

    res.status(200).json({ msg: "Task Updated successfull", task });
  } catch (error) {
    next(error);
  }
};

const moveTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(id, req.body);
    const board = await Board.find();

    res.status(200).json({ msg: `Task moved to ${board.colums.name}`, task });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    res.status(200).json({ msg: "Task Deleted", task });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTasks, createTask, updateTask, moveTask, deleteTask };
