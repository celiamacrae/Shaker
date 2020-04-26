const Sequelize = require('sequelize')
const db = require('../db')

const RecipeItem = db.define('recipeitem', {
  amount: {
    type: Sequelize.STRING
  }
})

module.exports = RecipeItem
