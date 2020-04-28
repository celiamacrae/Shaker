'use strict'

const db = require('../server/db')
const {Item, Recipe, RecipeItem} = require('../server/db/models')
const {
  liquor,
  ingredients,
  accessories,
  recipes,
  recipeitems
} = require('./seed-data')

const seed = () =>
  Promise.all(liquor.map(liq => Item.create(liq))).then(() =>
    Promise.all(ingredients.map(i => Item.create(i))).then(() =>
      Promise.all(accessories.map(acc => Item.create(acc))).then(() =>
        Promise.all(recipes.map(rec => Recipe.create(rec))).then(() =>
          Promise.all(recipeitems.map(ri => RecipeItem.create(ri)))
        )
      )
    )
  )

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
