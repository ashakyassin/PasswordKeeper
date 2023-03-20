const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get("/:website/:username/:categary/:pass", (req, res) => {
  res.json(req.params)
});

module.exports = router;
