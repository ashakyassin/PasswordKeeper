const db = require('../connection');

const getCategories = () => {
  return db.query('SELECT * FROM categories;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getCategories };
