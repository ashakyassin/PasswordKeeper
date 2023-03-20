const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { id, username, password, website } = req.body;
  pool.query(
    'UPDATE accounts SET username=$1, password=$2, website=$3 WHERE id=$4',
    [username, password, website, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;
