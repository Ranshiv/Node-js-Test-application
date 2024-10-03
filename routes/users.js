var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const users = [
      { id: 1, name: "Andrew" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" }
  ];
  res.json(users);
});

module.exports = router;
