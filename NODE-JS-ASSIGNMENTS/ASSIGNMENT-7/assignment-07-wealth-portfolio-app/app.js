const express = require("express");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/errorMiddleware");

// Routes
const userRoutes = require("./routes/userRoutes");
const assetRoutes = require("./routes/assetRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const savingsRoutes = require("./routes/savingsRoutes");
const financeRoutes = require("./routes/financeRoutes");
const connectDB = require("./db");

const app = express();
const PORT = 3000;

// initialise mongodb connection
connectDB();

// Middlewares
app.use(bodyParser.json()); // Parse JSON request body

// Mount Routes
app.use("/api/users", userRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/savings", savingsRoutes);
app.use("/api/finances", financeRoutes);

// Error handling middleware
app.use(errorMiddleware.handleError);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
