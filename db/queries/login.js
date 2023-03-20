const db = require('../connection');

const getUserByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email = $1', [email])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getUserByEmail };

