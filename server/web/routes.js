const animalsRoutes = require('../controllers/animals/animals.router')

const modules = [animalsRoutes]

module.exports = app => {
  modules.map((module) => module(app))
}
