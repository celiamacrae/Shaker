'use strict'

const db = require('../server/db')
const {Item} = require('../server/db/models')
const {Recipe} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const items = await Promise.all([
    Item.create({name: 'Tequila', category: 'liquor'}),
    Item.create({name: 'Vodka', category: 'liquor'}),
    Item.create({name: 'Rum', category: 'liquor'}),
    Item.create({name: 'Gin', category: 'liquor'}),
    Item.create({name: 'Whiskey', category: 'liquor'}),
    Item.create({name: 'Ice', category: 'ingredient'}),
    Item.create({name: 'Soda Water', category: 'ingredient'}),
    Item.create({name: 'Cocktail Shaker', category: 'accesory'}),
    Item.create({name: 'Blender', category: 'accesory'})
  ])

  console.log(`seeded ${items.length} items`)
  console.log(`seeded successfully`)

  const recipes = await Promise.all([
    Recipe.create({name: 'Tequila Soda'}),
    Recipe.create({name: 'Vodka Soda'})
  ])

  console.log(`seeded ${recipes.length} recipes`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
