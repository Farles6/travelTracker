const router = require('express').Router();

const users = ['bob', 'alex', 'will', 'tristan'];

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.json(users);
  });
  return router;
};
