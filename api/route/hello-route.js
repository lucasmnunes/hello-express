module.exports = app => {
  const controller = require('../controller/hello-controller')()

  app.route('/api/v1/hello')
    .get(controller.sayHello)
}