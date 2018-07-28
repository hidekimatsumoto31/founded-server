const _ = require('lodash')
const animalList = require('../../repositories/animals/animal.repository')

module.exports = getAnimals = async (type) => {
  if (type) {
    return animalList[type] || []
  }

  const animals =  Object.keys(animalList).reduce((accumulator, animals) => {
    return accumulator.concat(animalList[animals])
  }, [])

  return _.shuffle(animals)
}
