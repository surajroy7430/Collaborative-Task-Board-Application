const mongoose = require("mongoose");

const columnSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tasks: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
});

const boardSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  members: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  columns: [columnSchema],
});

module.exports = mongoose.model("Board", boardSchema);
