'use strict';

const { sequelize } = require('../db.js');

const Expense = sequelize.define(
  'Expense',
  {
    userId: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    spentAt: {
      type: sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.NOW,
    },
    amount: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    category: {
      type: sequelize.STRING,
      allowNull: false,
    },
    note: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  { tableName: 'expenses', timestamps: false },
);

module.exports = {
  Expense,
};
