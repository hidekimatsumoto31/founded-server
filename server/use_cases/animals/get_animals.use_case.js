const animalList = require('../../repositories/animals/animal.repository')

module.exports = getAnimals = async (type) => {
  if (type) {
    return animalList[type] || []
  }

  return Object.keys(animalList).reduce((accumulator, animals) => {
    return accumulator.concat(animals[animals])
  }, [])
}
