const Sequelize = require('sequelize')
const db = require('../db')

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.ENUM('liquor', 'accesory')
  }
})

module.exports = Item
