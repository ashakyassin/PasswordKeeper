const db = require('../connection');

const getAccounts = () => {
  return db.query('SELECT * FROM accounts;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAccounts };
