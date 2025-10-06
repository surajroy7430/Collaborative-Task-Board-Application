const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dueDate: { type: Date, required: true },
  status: {type: String, enum: ["Todo", "InProgress", "Done"], default: "Todo"}
});

module.exports = mongoose.model("Task", taskSchema);
