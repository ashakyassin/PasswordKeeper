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
        res.render('generateRandomPassword', {categories: categories});
    } catch (err) {
        console.log(err.message);
        res.send('You must be logged in to view this page. Click <a href="/auth/login"> here</a> to login.');
    }

})

router.get('/success', async (req, res) => {
    try {
        res.render('generateRandomPasswordSuccess');
    } catch (err) {
        console.log(err.message);
        res.send('You must be logged in to view this page. Click <a href="/auth/login"> here</a> to login.');
    }

})

function getRandomChar(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
}

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function generateP(options) {
    const groups = options?.groups ?? [
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'abcdefghijklmnopqrstuvwxyz',
        '1234567890',
        '!@#$%^&()_+~`|}{[]:;?><,./-='
    ];
    const length = options?.length ?? 16;
    let pass = groups.map(getRandomChar).join('');

    const str = groups.join('');

    for (let i = pass.length; i <= length; i++) {
        pass += getRandomChar(str)
    }
    return shuffle(pass);
}

router.post('/', async (req, res) => {
    try {
        const randomPass = generateP();
        const query = `INSERT INTO accounts (username, password, website, category_id)` +
            `VALUES ('${req.body.username}', '${randomPass}', '${req.body.website}', ${req.body.category})`;
        const result = await pool.query(query);
        if (result) {
            res.redirect('/generateRandomPassword/success');
        }
    } catch (err) {
        console.log(err.message);
        res.send('You must be logged in to view this page. Click <a href="/auth/login"> here</a> to login.');
    }

})


module.exports = router;

