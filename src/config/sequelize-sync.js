/* eslint-disable no-console */
const { sequelize } = require('../db.js');

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  } finally {
    await sequelize.close();
  }
}

module.exports = { syncDatabase };
