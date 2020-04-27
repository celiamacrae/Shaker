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
  let champagne = await Item.create({name: 'Champagne', category: 'liquor'})

  let liquor = [tequila, vodka, rum, gin, whiskey, bourbon, champagne]

  console.log(`seeded ${liquor.length} liquors`)
  console.log(`seeded successfully`)

  let ice = await Item.create({name: 'Ice', category: 'ingredient'})
  let sodaWater = await Item.create({
    name: 'Soda Water',
    category: 'ingredient'
  })
  let lemon = await Item.create({name: 'Lemon', category: 'ingredient'})
  let lime = await Item.create({name: 'Lime', category: 'ingredient'})
  let orange = await Item.create({name: 'Orange', category: 'ingredient'})
  let gingerBeer = await Item.create({
    name: 'Ginger Beer',
    category: 'ingredient'
  })
  let bitters = await Item.create({name: 'Bitters', category: 'ingredient'})
  let sugar = await Item.create({name: 'Sugar', category: 'ingredient'})

  let ingredients = [
    ice,
    sodaWater,
    lemon,
    lime,
    orange,
    gingerBeer,
    bitters,
    sugar
  ]

  console.log(`seeded ${ingredients.length} ingredients`)
  console.log(`seeded successfully`)

  let cocktailShaker = await Item.create({
    name: 'Cocktail Shaker',
    category: 'accessory'
  })
  let blender = await Item.create({name: 'Blender', category: 'accessory'})

  let accessories = [cocktailShaker, blender]

  console.log(`seeded ${accessories.length} accessories`)
  console.log(`seeded successfully`)

  let tequila_soda = await Recipe.create({
    name: 'Tequila Soda',
    description:
      'Fill a glass with ice and add 2oz of tequila. $Top with club soda. $Optionally: add a squeeze of lime or grapefruit.',
    imageURL:
      'https://qph.fs.quoracdn.net/main-qimg-dc6e5d9137dead9834e5b339c97ad430'
  })
  let vodka_soda = await Recipe.create({
    name: 'Vodka Soda',
    description:
      'Fill a glass with ice and add 2oz of vodka. $Top with club soda. $Optionally: add a squeeze of lime or lemon.',
    imageURL:
      'https://www.tasteofhome.com/wp-content/uploads/2019/07/cocktail-shutterstock_422747731.jpg'
  })
  let vodka_on_the_rocks = await Recipe.create({
    name: 'Vodka on the Rocks',
    description:
      'Fill a rocks glass to the top with ice cubes. $Pour in 2oz of vodka. $Optionally: Garnish with lemon zest.',
    imageURL:
      'https://us.inshaker.com/uploads/cocktail/hires/283/1556126126-Vodka-on-the-Rocks__highres.jpg'
  })
  let tequila_on_the_rocks = await Recipe.create({
    name: 'Tequila on the Rocks',
    description:
      'Fill a rocks glass to the top with ice cubes. $Pour in 2oz of tequila. $Optionally: Garnish with lime zest.',
    imageURL:
      'https://www.patrontequila.com/binaries/largeretina/content/gallery/patrontequila/recipes/patron-anejo/a-ejo-on-the-rocks/cocktail.jpg'
  })
  let moscow_mule = await Recipe.create({
    name: 'Moscow Mule',
    description:
      'Pour 1.5 oz of vodka and 0.5 oz lime juice into a mug. $Add ice cubes and ginger beer. $Optionally: Drop a lime wedge in the mug for garnish.',
    imageURL:
      'https://www.liquor.com/thmb/W7rZCGQTShuKl5-loQO5LiZzh9k=/735x0/__opt__aboutcom__coeus__resources__content_migration__liquor__2020__01__02085936__cbd-moscow-mule-720x720-recipe-10d6f1fa45084faf9e542e3fc2119236.jpg'
  })
  let old_fashioned = await Recipe.create({
    name: 'Old Fashioned',
    description:
      'Stir sugar, bitters, and 2 tablespoons of warm water in a rocks glass until most of the sugar is dissolved. $Add 3 ice cubes and pour over 2 oz bourbon. $Stir for 20 seconds. $Garnish with orange wedge. $Optionally: you can also garnish with a cherry.',
    imageURL:
      'https://i.guim.co.uk/img/media/688a59514e251771b6c66fb3d3bf8f7b6e9cae00/985_1329_3722_3721/master/3722.jpg?width=300&quality=85&auto=format&fit=max&s=2eaa9ba581cf7c548c0ca7387023825f'
  })

  const recipes = [
    tequila_soda,
    vodka_soda,
    vodka_on_the_rocks,
    tequila_on_the_rocks,
    moscow_mule,
    old_fashioned
  ]

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
    RecipeItem.create({recipeId: 5, itemId: 13}),
    //OLD FASHIONED 6
    RecipeItem.create({recipeId: 6, itemId: 6, amount: '2 oz'}),
    RecipeItem.create({recipeId: 6, itemId: 14, amount: '3 dashes'}),
    RecipeItem.create({recipeId: 6, itemId: 15, amount: '1 teaspoon'}),
    RecipeItem.create({recipeId: 6, itemId: 12})
  ])
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
