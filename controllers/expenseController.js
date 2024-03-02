const Expense = require("../models/expenseModel");

exports.createExpense = async (req, res, next) => {
  try {
    req.body.date = Date.now();
    const expense = await Expense.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        message: "Expense Created Sucessfully",
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getAllExpenses = async (req, res, next) => {
  try {
    console.log(req.query.user);
    const expenses = await Expense.find({ user: req.query.user });

    res.status(200).json({
      status: "success",
      data: {
        results: expenses.length,
        expenses,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
