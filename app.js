const express = require("express");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

app.use(express.json({ limit: "100kb" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);

app.get("/hello", (req, res) => {
  res.send("hello man !");
});

module.exports = app;
