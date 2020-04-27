'use strict'

const db = require('../server/db')
const {Item} = require('../server/db/models')
const {Recipe} = require('../server/db/models')
const {RecipeItem} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  let tequila = await Item.create({name: 'Tequila', category: 'liquor'})
  let vodka = await Item.create({name: 'Vodka', category: 'liquor'})
  let rum = await Item.create({name: 'Rum', category: 'liquor'})
  let gin = await Item.create({name: 'Gin', category: 'liquor'})
  let whiskey = await Item.create({name: 'Whiskey', category: 'liquor'})
  let bourbon = await Item.create({name: 'Bourbon', category: 'liquor'})
  let champagne = Item.create({name: 'Champagne', category: 'liquor'})

  let liquor = [tequila, vodka, rum, gin, whiskey, bourbon, champagne]

  console.log(`seeded ${liquor.length} liquors`)
  console.log(`seeded successfully`)

  const items = await Promise.all([
    Item.create({name: 'Ice', category: 'ingredient'}),
    Item.create({name: 'Soda Water', category: 'ingredient'}),
    Item.create({name: 'Lemon', category: 'ingredient'}),
    Item.create({name: 'Lime', category: 'ingredient'}),
    Item.create({name: 'Orange', category: 'ingredient'}),
    Item.create({name: 'Ginger Beer', category: 'ingredient'}),
    Item.create({name: 'Bitters', category: 'ingredient'}),

    Item.create({name: 'Cocktail Shaker', category: 'accesory'}),
    Item.create({name: 'Blender', category: 'accesory'})
  ])

  console.log(`seeded ${items.length} items`)
  console.log(`seeded successfully`)

  const recipes = await Promise.all([
    Recipe.create({name: 'Tequila Soda'}),
    Recipe.create({name: 'Vodka Soda'}),
    Recipe.create({
      name: 'Vodka on the Rocks',
      description:
        'Fill a rocks glass to the top with ice cubes. $Pour in 2oz of vodka. $Optionally: Garnish with lemon Zest.'
    }),
    Recipe.create({name: 'Tequila on the Rocks'}),
    Recipe.create({name: 'Moscow Mule'}),
    Recipe.create({name: 'Old Fashioned'})
  ])

  console.log(`seeded ${recipes.length} recipes`)
  console.log(`seeded successfully`)

  const recipesitems = await Promise.all([
    //TEQUILA SODA 1
    RecipeItem.create({recipeId: 1, itemId: 1}),
    RecipeItem.create({recipeId: 1, itemId: 9}),
    //VODKA SODA 2
    RecipeItem.create({recipeId: 2, itemId: 2}),
    RecipeItem.create({recipeId: 2, itemId: 9}),
    //VODKA ON THE ROCKS 3
    RecipeItem.create({recipeId: 3, itemId: 2}),
    RecipeItem.create({recipeId: 3, itemId: 8}),
    //TEQUILA ON THE ROCKS 4
    RecipeItem.create({recipeId: 4, itemId: 1}),
    RecipeItem.create({recipeId: 4, itemId: 8}),
    //MOSCOW MULE 5
    RecipeItem.create({recipeId: 5, itemId: 2}),
    RecipeItem.create({recipeId: 5, itemId: 11}),
    RecipeItem.create({recipeId: 5, itemId: 13})
    //OLD FASHIONED 6
  ])

  console.log(`seeded ${recipesitems.length} recipe items`)
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
