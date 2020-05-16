module.exports = app => {
  const controller = require('../controller/user-controller')()

  app.route('/api/v1/users')
    .get(controller.users)
}