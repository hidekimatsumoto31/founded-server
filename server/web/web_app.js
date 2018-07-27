const express = require('express')
const routes = require('./routes')

class WebApp {
  constructor (app = express) {
    this.app = app()
    this.fetchRoutes()
    this.init()
  }

  fetchRoutes () {
    return routes(this.app)
  }

  init () {
    return this.app.listen(3000, this.banner)
  }

  banner () {
    return console.log('Server UP and Running')
  }
}

module.exports = new WebApp()
