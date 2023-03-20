const express = require('express');
const {Pool} = require("pg");
const router = express.Router();

const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    database: 'midterm'
});

router.get('/', async (req, res) => {
    try {
        const categoriesResult = await pool.query('SELECT * FROM categories');
        const categories = categoriesResult.rows;
        res.render('makeYourOwnPassword', {categories: categories});
    } catch (err) {
        console.log(err.message);
        res.send('You must be logged in to view this page. Click <a href="/auth/login"> here</a> to login.');
    }

})

router.get('/success', async (req, res) => {
    try {
        res.render('makeYourOwnPasswordSuccess');
    } catch (err) {
        console.log(err.message);
        res.send('You must be logged in to view this page. Click <a href="/auth/login"> here</a> to login.');
    }

})

router.post('/', async (req, res) => {
    try {
        const query = `INSERT INTO accounts (username, password, website, category_id)` +
            `VALUES ('${req.body.username}', '${req.body.password}', '${req.body.website}', ${req.body.category})`;
        const result = await pool.query(query);
        if (result) {
            res.redirect('makeYourOwnPassword/success');
        }
    } catch (err) {
        console.log(err.message);
        res.send('You must be logged in to view this page. Click <a href="/auth/login"> here</a> to login.');
    }

})


module.exports = router;

