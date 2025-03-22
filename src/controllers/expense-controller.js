const {
  createExpenseService,
  getExpenseByIdService,
  updateExpenseService,
  deleteExpenseService,
  getAllExpensesService,
} = require('../services/expense-services');
const { getUserByIdService } = require('../services/user-service');

const createExpenseController = (req, res) => {
  try {
    const expense = req.body;

    getUserByIdService(Number(expense.userId));

    const newExpense = createExpenseService(expense);

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(400).json({ issue: error.message.split(',') });
  }
};

const getAllExpensesController = (req, res) => {
  const expenses = getAllExpensesService(req.query);

  return res.status(200).json(expenses);
};

const getExpenseByIdController = (req, res) => {
  const { id } = req.params;

  try {
    const expense = getExpenseByIdService(Number(id));

    res.status(200).json(expense);
  } catch (error) {
    if (error.message.includes('Expense not found')) {
      return res.status(404).json({ issue: error.message });
    }

    res.status(400).json({ issue: error.message });
  }
};

const updateExpenseController = (req, res) => {
  const { id } = req.params;
  const expense = req.body;

  try {
    const updatedExpense = updateExpenseService(Number(id), expense);

    res.status(200).json(updatedExpense);
  } catch (error) {
    if (error.message.includes('Expense not found')) {
      return res.status(404).json({ issue: error.message });
    }

    res.status(400).json({ issue: error.message.split(',') });
  }
};

const deleteExpenseController = (req, res) => {
  const { id } = req.params;

  try {
    deleteExpenseService(Number(id));

    res.status(204).send();
  } catch (error) {
    res.status(404).json({ issue: error.message });
  }
};

module.exports = {
  createExpenseController,
  getAllExpensesController,

  getExpenseByIdController,
  updateExpenseController,
  deleteExpenseController,
};
