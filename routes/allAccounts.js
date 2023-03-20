const express = require('express');
const router  = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  database: 'midterm'
});

router.get('/', async (req, res) => {
  try {
    const organizationsResult = await pool.query('SELECT * FROM organizations');
    const organizations = organizationsResult.rows[0].name;
    const categoriesResult = await pool.query('SELECT * FROM categories');
    const categories = categoriesResult.rows;
    const accountsResult = await pool.query('SELECT * FROM accounts');
    const accounts = accountsResult.rows;


    const loggedInUserResult = await pool.query('SELECT * FROM users WHERE email = $1', [req.session.user]);
    const loggedInUser = loggedInUserResult.rows[0].email;


    res.render('allAccounts', { organizations: organizations, categories: categories, accounts: accounts, loggedInUser: loggedInUser } );
  } catch (err) {
    console.log(err.message);
    res.send('You must be logged in to view this page. Click <a href="/auth/login"> here</a> to login.');
  }
});


module.exports = router;
