
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const { getUserByEmail } = require('../db/queries/login');



router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log("test" )
  const hashedPassword = bcrypt.hashSync('1234', 10);
  console.log("pw ", hashedPassword);

  getUserByEmail(email)
  .then((user) => {
    console.log("res", user)
    if (user) {
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          req.session.user = user.email;
          res.status('200').send();
        } else {
          res.status('401').send();
        }
      });
    } else {
      res.status('401').send();
    }
  })
});

router.get('/logout', (req, res) => {
  req.session.user = null;
  res.status('200').send();
});

module.exports = router;
