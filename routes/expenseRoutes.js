const express = require("express");
const expenseController = require("../controllers/expenseController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(expenseController.getAllExpenses)
  .post(expenseController.createExpense);

module.exports = router;
