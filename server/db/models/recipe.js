const Sequelize = require('sequelize')
const db = require('../db')

const Recipe = db.define('recipe', {
  name: {
    type: Sequelize.STRING
  },
  urlifyName: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
})

Recipe.addHook('beforeCreate', recipe => {
  let name = recipe.name
  recipe.urlifyName = name
    .toLowerCase()
    .split(' ')
    .join('_')
})

module.exports = Recipe
