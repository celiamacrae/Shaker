'use strict'

const db = require('../server/db')
// const {Item, Recipe, RecipeItem} = require('../server/db/models')
const {
  seedAccessories,
  seedIngredients,
  seedLiquor,
  seedRecipes,
  seedRIs
} = require('./seed-data')

const seed = async () => {
  await seedLiquor()
  await seedIngredients()
  await seedAccessories()
  await seedRecipes()
  await seedRIs()
}

const main = () => {
  console.log('Syncing db...')
  db
    .sync({force: true})
    .then(() => {
      console.log('Seeding databse...')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
    })
    .then(() => {
      db.close()
      return null
    })
}
main()
