const { expect, use } = require('chai')
const animalList = require('../../../repositories/animals/animal.repository')

const useCase = '../../../use_cases/animals/get_animals.use_case'

describe('getAnimalsUseCase', function () {
  it('Must returns sharks', async () => {
    // given
    const getAnimalUseCase = require(useCase)

    // when
    const result = await getAnimalUseCase('shark')

    // then
    return expect(result).to.be.eq(animalList['shark'])
  })

  it('Must returns no animals', async () => {
    // given
    const getAnimalUseCase = require(useCase)

    // when
    const result = await getAnimalUseCase('fish')

    // then
    return expect(result.length).to.be.eq(0)
  })

  it('Must returns all animals', async () => {
    // given
    const getAnimalUseCase = require(useCase)

    // when
    const result = await getAnimalUseCase()

    // then
    const expectedList = animalList['cat'].concat(animalList['shark'])
    return expect(result.length).to.be.eq(expectedList.length)
  })
})
