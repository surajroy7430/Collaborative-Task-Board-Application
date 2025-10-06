const Board = require("../models/board.model");

const createBoard = async (req, res, next) => {
  try {
    const { title } = req.body;

    const board = await Board.findOne({ title });
    if (board) return res.status(400).json({ err: "Board already exists" });

    board = new Board(req.body);
    await board.save();

    res.status(201).json({ msg: "Board Created", board });
  } catch (error) {
    next(error);
  }
};

const deleteBoard = async (req, res, next) => {
  try {
    const { id } = req.params;

    const board = await Board.findByIdAndDelete(id);

    res.status(200).json({ msg: "Board deleted", board });
  } catch (error) {
    next(error);
  }
};

const inviteUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const removeUser = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = { createBoard, deleteBoard, inviteUser, removeUser };
