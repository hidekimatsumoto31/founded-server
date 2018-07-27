const AnimalsController = require('./animals.controller')
const controller = new AnimalsController()

module.exports = app => {
  app.get('/animals', controller.get)

  return app
}
