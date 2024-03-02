const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please specify your expense"],
  },
  description: {
    type: String,
    required: [true, "Please describe your expense"],
  },
  mode: {
    type: String,
    enum: ["credit", "debit"],
    default: "credit",
  },
  date: {
    type: Date,
    required: [true, "Please specify your date of expense"],
  },
  amount: {
    type: Number,
    required: [true, "Please the amount used in the expense"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "An expense must belong to an user"],
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
