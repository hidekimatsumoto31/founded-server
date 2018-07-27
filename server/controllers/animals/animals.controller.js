const getAnimals = require('../../use_cases/animals/get_animals.use_case')

class AnimalsController {
  async get (req, res) {
    const type = req.query.type

    let result

    try {
      result = await getAnimals(type)
    } catch (error) {
      const statusCode = error.statusCode || 500
      res.status(statusCode).json(error.message)
    }

    return res.json(result)
  }
}

module.exports = AnimalsController
