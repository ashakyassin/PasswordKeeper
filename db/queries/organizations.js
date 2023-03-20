const db = require('../connection');

const getOrganizations = () => {
  return db.query('SELECT * FROM organizations;')
    .then(data => {
      return data.rows[0].name;
    });
};

module.exports = { getOrganizations };
