module.exports = () => {
  const users = require('../data/user-data.json');
  const controller = {};

  controller.users = (req, res) => res.status(200).json(users);

  return controller;
}