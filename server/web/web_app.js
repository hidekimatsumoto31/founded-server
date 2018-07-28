const express = require('express')
const routes = require('./routes')
const cors = require('cors')

class WebApp {
  constructor (app = express) {
    this.app = app()
    this.fetchRoutes()
    this.cors()
    this.init()
  }

  fetchRoutes () {
    return routes(this.app)
  }

  cors() {
    const corsOptions = {
      origin: '*',
    }

    this.app.use(cors(corsOptions));
  }

  init () {
    return this.app.listen(3000, this.banner)
  }

  banner () {
    return console.log('Server UP and Running')
  }
}

module.exports = new WebApp()
