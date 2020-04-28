const seedLiquor = require('./liquor')
const {seedIngredients} = require('./ingredients')
// const {accessories} = require('./accessories')
const {seedAccessories} = require('./accessories')
const seedRecipes = require('./recipes')
const seedRIs = require('./recipeItems')

module.exports = {
  seedLiquor,
  seedIngredients,
  seedRecipes,
  seedRIs,
  seedAccessories
}
