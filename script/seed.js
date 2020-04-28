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
  let campari = await Item.create({name: 'Campari', category: 'liquor'})
  let vermouth = await Item.create({name: 'Vermouth', category: 'liquor'})
  let orange_liqueur = await Item.create({
    name: 'Orange Liqueur',
    category: 'liquor'
  })
  let cognac = await Item.create({name: 'Cognac', category: 'liquor'})
  let coffee_liqueur = await Item.create({
    name: 'Coffee Liqueur',
    category: 'liquor'
  })

  let liquor = [
    tequila,
    vodka,
    rum,
    gin,
    whiskey,
    bourbon,
    champagne,
    campari,
    vermouth,
    orange_liqueur,
    cognac,
    coffee_liqueur
  ]

  console.log(`seeded ${liquor.length} liquors`)
  console.log(`seeded successfully`)

  let ice = await Item.create({name: 'Ice', category: 'ingredient'})
  let clubSoda = await Item.create({
    name: 'Club Soda',
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
  let tonic = await Item.create({name: 'Tonic Water', category: 'ingredient'})
  let syrup = await Item.create({name: 'Simple Syrup', category: 'ingredient'})
  let salt = await Item.create({name: 'Salt', category: 'ingredient'})
  let cream = await Item.create({name: 'Heavy Cream', category: 'ingredient'})
  let mint = await Item.create({name: 'Mint Leaves', category: 'ingredient'})

  let ingredients = [
    ice,
    clubSoda,
    lemon,
    lime,
    orange,
    gingerBeer,
    bitters,
    sugar,
    tonic,
    syrup,
    salt,
    cream,
    mint
  ]

  console.log(`seeded ${ingredients.length} ingredients`)
  console.log(`seeded successfully`)

  let cocktailShaker = await Item.create({
    name: 'Cocktail Shaker',
    category: 'accessory'
  })
  let blender = await Item.create({name: 'Blender', category: 'accessory'})
  let muddler = await Item.create({name: 'Muddler', category: 'accessory'})

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
  let gin_tonic = await Recipe.create({
    name: 'Gin and Tonic',
    description:
      'Fill glass with ice. $Pour in 2 oz Gin. $Fill with tonic water. $Optionally: garnish with a lime.',
    imageURL:
      'https://www.platingsandpairings.com/wp-content/uploads/2019/04/spanish-gin-and-tonic-9-500x500.jpg'
  })
  let daquiri = await Recipe.create({
    name: 'Daquiri',
    description:
      'Shake 2oz rum, 0.5 oz simple syrup and 1 oz fresh lime juice over ice. $Pour into a coup glass and serve straight up. ',
    imageURL:
      'https://assets3.thrillist.com/v1/image/1707944/1584x3000/scale;jpeg_quality=60.jpg'
  })
  let whiskey_sour = await Recipe.create({
    name: 'Whiskey Sour',
    description:
      'Combine whiskey, lemon juice, and simple syrup in a cocktail shaker. $Fill with shaker with ice, cover, and shake vigorously for about 20 seconds. $Strain cocktail into a glass filled with ice. $Optionally: garnish with orange wheel and cherry.',
    imageURL:
      'https://assets.bonappetit.com/photos/57acc14e53e63daf11a4d9b6/1:1/w_1536,h_1536,c_limit/whiskey-sour.jpg'
  })
  let dark_stormy = await Recipe.create({
    name: 'Dark and Stormy',
    description:
      'Fill glass with ice. $Add rum, and then top with ginger beer. $Squeeze in, and then garnish with lime wedge.',
    imageURL:
      'https://www.liquor.com/thmb/vtUBz5WfzE9GdbD44fd5-pu8y8w=/720x540/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__liquor__2016__10__04133803__dark-n-stormy-720sq-e78a585d82524a45a8783f94b76f0963.jpg'
  })
  let negroni = await Recipe.create({
    name: 'Negroni',
    description:
      'Stir 1oz dry gin, 1oz sweet vermouth, and 1 oz Campari with ice for 20 seconds. $Optionally: garnish with orange peel.',
    imageURL:
      'https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Negroni_FLAT-87033d9.jpg?quality=90&resize=768%2C574'
  })
  let gin_martini = await Recipe.create({
    name: 'Gin Martini',
    description:
      'Add 2 oz gin, 1 oz dry vermouth and ice into shaker. $Stir (do not shake) for about 10 seconds. $Strain into coup glass. $Optionally: garnish with lemon peel and olive.',
    imageURL:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/5/0/Diageo-TheUltimateKetelOneDirtyMartini_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371587457387.jpeg'
  })
  let vodka_martini = await Recipe.create({
    name: 'Vodka Martini',
    description:
      'Add 2 oz vodka, 1 oz dry vermouth and ice into shaker. $Stir (do not shake) for about 10 seconds. $Strain into coup glass. $Optionally: garnish with lemon peel and olive.',
    imageURL:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/12/5/0/Diageo-TheUltimateKetelOneDirtyMartini_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371587457387.jpeg'
  })
  let manhattan = await Recipe.create({
    name: 'Manhattan',
    description:
      'Stir whiskey, vermouth, and bitters with cracked ice. $Strain into a chilled coup. $Garnish with orange peel and or brandied cherry.',
    imageURL:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/13/0/ED0309H_classic-manhattan-cocktail_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371614573383.jpeg'
  })
  let sidecar = await Recipe.create({
    name: 'Sidecar',
    description:
      'Twist the rim of a coupe into a plate of sugar so it attaches to the rim of the glass. $Add Cognac, orange liqueur, and lemon juice into a cocktail shaker with ice and then shake until chilled. $Strain into sugar-rimmed coupe and garnish with an orange peel.',
    imageURL:
      'https://stevethebartender.com.au/wp-content/uploads/2014/12/sidecar-cocktail-recipe.jpg'
  })
  let gin_gimlet = await Recipe.create({
    name: 'Gimlet (Gin)',
    description:
      'Shake 2 oz gin and 2/3 oz lime juice with cracked ice. $Strain into a chilled cocktail glass.',
    imageURL:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fclassic-vodka-gimlet-xl-recipe2017.jpg'
  })
  let vodka_gimlet = await Recipe.create({
    name: 'Gimlet (Vodka)',
    description:
      'Shake 2 oz vodka and 2/3 oz lime juice with cracked ice. $Strain into a chilled cocktail glass.',
    imageURL:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fclassic-vodka-gimlet-xl-recipe2017.jpg'
  })
  let margarita = await Recipe.create({
    name: 'Margarita',
    description:
      'Rub a lime wedge over the edge of a rocks glass (or Margarita glass) then twist it on a plate of coarse salt so that it attaches. $Shake tequila, orange liqueur, and lime juice in a shaker with cracked ice. $Strain in a glass over ice.',
    imageURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/marg-h-1526063646.jpg'
  })
  let champagne_cocktail = await Recipe.create({
    name: 'Champagne Cocktail',
    description:
      'Add 2 dashes of bitter and a sugar cube into a champagne flute. $Add cognac followed by gently pouring chilled champagne. $Optionally: a lemon twist over top.',
    imageURL:
      'https://www.thespruceeats.com/thmb/je29oIG13icQ6-XE3Vl24O2jOzE=/4048x2277/smart/filters:no_upscale()/champagne-cocktail-recipe-759288-hero-5bdca167c9e77c005142234d.jpg'
  })
  let white_russian = await Recipe.create({
    name: 'White Russian',
    description:
      'Fill an old fashioned glass with ice. $Pour in vodka, coffee liqueur, and cream. $Stir until combined.',
    imageURL:
      'https://images.immediate.co.uk/production/volatile/sites/2/2020/02/Cocktail-1-4c4450d.jpg?webp=true&quality=45&resize=1240%2C826'
  })
  let mojito = await Recipe.create({
    name: 'Mojito',
    description:
      'Place mint leaves and one lime wedge into a sturdy glass. $Use a muddler to crush the mint and lime. $ Add 2 more lime wedges and the sugar, and muddle again. Do not strain the mixture. $Fill the glass almost to the top with ice. $Pour the rum over the ice, and fill the glass with carbonated water. $Stir and garnish with remaining lime wedge.',
    imageURL:
      'https://www.artofdrink.com/wp-content/uploads/2010/08/how-to-make-a-mojito-recipe-720x720.jpg'
  })
  let water = await Recipe.create({
    name: 'Water',
    description: 'Drink. $More. $Water.',
    imageURL:
      'https://images.everydayhealth.com/images/healthy-living/the-health-benefits-of-water-722x406.jpg?w=1110'
  })
  let whiskey_on_the_rocks = await Recipe.create({
    name: 'Whiskey on the Rocks',
    description:
      'Fill a rocks glass to the top with ice cubes. $Pour in 2oz of whiskey.',
    imageURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/molecular-reason-drink-whiskey-rocks-1503059521.jpg'
  })
  let bourbon_on_the_rocks = await Recipe.create({
    name: 'Bourbon on the Rocks',
    description:
      'Fill a rocks glass to the top with ice cubes. $Pour in 2oz of bourbon whiskey.',
    imageURL:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/molecular-reason-drink-whiskey-rocks-1503059521.jpg'
  })

  const recipes = [
    tequila_soda,
    vodka_soda,
    vodka_on_the_rocks,
    tequila_on_the_rocks,
    moscow_mule,
    old_fashioned,
    gin_tonic,
    daquiri,
    whiskey_sour,
    dark_stormy,
    negroni,
    gin_martini,
    vodka_martini,
    manhattan,
    sidecar,
    gin_gimlet,
    vodka_gimlet,
    margarita,
    champagne_cocktail,
    white_russian,
    mojito,
    water,
    whiskey_on_the_rocks
  ]

  console.log(`seeded ${recipes.length} recipes`)
  console.log(`seeded successfully`)

  const recipesitems = await Promise.all([
    //TEQUILA SODA 1
    RecipeItem.create({recipeId: 1, itemId: 1, amount: '2 oz'}), //tequila
    RecipeItem.create({recipeId: 1, itemId: 14}), //club soda
    RecipeItem.create({recipeId: 1, itemId: 13}), //ice
    //VODKA SODA 2
    RecipeItem.create({recipeId: 2, itemId: 2, amount: '2 oz'}), //vodka
    RecipeItem.create({recipeId: 2, itemId: 14}), //club soda
    RecipeItem.create({recipeId: 2, itemId: 13}), //ice
    //VODKA ON THE ROCKS 3
    RecipeItem.create({recipeId: 3, itemId: 2, amount: '2 oz'}), //vodka
    RecipeItem.create({recipeId: 3, itemId: 13}), //ice
    //TEQUILA ON THE ROCKS 4
    RecipeItem.create({recipeId: 4, itemId: 1, amount: '2 oz'}), //tequila
    RecipeItem.create({recipeId: 4, itemId: 13}), //ice
    //MOSCOW MULE 5
    RecipeItem.create({recipeId: 5, itemId: 2, amount: '1.5 oz'}), //vodka
    RecipeItem.create({recipeId: 5, itemId: 16}), //lime
    RecipeItem.create({recipeId: 5, itemId: 18}), //ginger beer
    RecipeItem.create({recipeId: 5, itemId: 13}), //ice
    //OLD FASHIONED 6
    RecipeItem.create({recipeId: 6, itemId: 6, amount: '2 oz'}), //bourbon
    RecipeItem.create({recipeId: 6, itemId: 19, amount: '3 dashes'}), //bitters
    RecipeItem.create({recipeId: 6, itemId: 20, amount: '1 teaspoon'}), //sugar
    RecipeItem.create({recipeId: 6, itemId: 17, amount: '1 peel of'}), //orange
    RecipeItem.create({recipeId: 6, itemId: 13, amount: '3 cubes'}), //ice
    //GIN & TONIC 7
    RecipeItem.create({recipeId: 7, itemId: 4, amount: '2 oz'}), //gin
    RecipeItem.create({recipeId: 7, itemId: 21}), //tonic water
    RecipeItem.create({recipeId: 7, itemId: 13}), //ice
    //DAIQUIRI 8
    RecipeItem.create({recipeId: 8, itemId: 3, amount: '2 oz'}), //rum
    RecipeItem.create({recipeId: 8, itemId: 22}), //simple syrup
    RecipeItem.create({recipeId: 8, itemId: 16}), //lime
    RecipeItem.create({recipeId: 8, itemId: 13}), //ice
    //WHISKEY SOUR 9
    RecipeItem.create({recipeId: 9, itemId: 5, amount: '2 oz'}), //whiskey
    RecipeItem.create({recipeId: 9, itemId: 15, amount: '3/4 oz'}), //lemon juice
    RecipeItem.create({recipeId: 9, itemId: 22, amount: '3/4 oz'}), //simple syrup
    RecipeItem.create({recipeId: 9, itemId: 13}), //ice
    //DARK AND STORMY 10
    RecipeItem.create({recipeId: 10, itemId: 3, amount: '1 part'}), //rum
    RecipeItem.create({recipeId: 10, itemId: 18, amount: '2 parts'}), //ginger beer
    RecipeItem.create({recipeId: 10, itemId: 16}), //lime
    RecipeItem.create({recipeId: 10, itemId: 13}), //ice
    //NEGRONI 11
    RecipeItem.create({recipeId: 11, itemId: 4, amount: '1 oz'}), //gin
    RecipeItem.create({recipeId: 11, itemId: 9, amount: '1 oz'}), //vermouth
    RecipeItem.create({recipeId: 11, itemId: 8, amount: '1 oz'}), //campari
    RecipeItem.create({recipeId: 11, itemId: 13}), //ice
    //GIN MARTINI 12
    RecipeItem.create({recipeId: 12, itemId: 4, amount: '2 oz'}), //gin
    RecipeItem.create({recipeId: 12, itemId: 9, amount: '1 oz'}), //vermouth
    RecipeItem.create({recipeId: 12, itemId: 13}), //ice
    //VODKA MARTINI 13
    RecipeItem.create({recipeId: 13, itemId: 2, amount: '2 oz'}), //vodka
    RecipeItem.create({recipeId: 13, itemId: 9, amount: '1 oz'}), //vermouth
    RecipeItem.create({recipeId: 13, itemId: 13}), //ice
    //MANHATTAN 14
    RecipeItem.create({recipeId: 14, itemId: 5, amount: '2 oz'}), //whiskey
    RecipeItem.create({recipeId: 14, itemId: 9, amount: '1 oz'}), //vermouth
    RecipeItem.create({recipeId: 14, itemId: 19, amount: '2 dashes'}), //bitters
    RecipeItem.create({recipeId: 14, itemId: 13}), //ice
    //SIDECAR 15
    RecipeItem.create({recipeId: 15, itemId: 11, amount: '2 oz'}), //cognac
    RecipeItem.create({recipeId: 15, itemId: 10, amount: '3/4 oz'}), //orange liqueur
    RecipeItem.create({recipeId: 15, itemId: 13}), //ice
    RecipeItem.create({recipeId: 15, itemId: 15, amount: '3/4 oz'}), //lemon juice
    RecipeItem.create({recipeId: 15, itemId: 20}), //sugar
    RecipeItem.create({recipeId: 15, itemId: 17}), //orange
    //GIN GIMLET 16
    RecipeItem.create({recipeId: 16, itemId: 4, amount: '2 oz'}), //gin
    RecipeItem.create({recipeId: 16, itemId: 16}), //lime
    RecipeItem.create({recipeId: 16, itemId: 13}), //ice
    RecipeItem.create({recipeId: 16, itemId: 26}), //cocktail shaker
    //VODKA GIMLET 17
    RecipeItem.create({recipeId: 17, itemId: 2, amount: '2 oz'}), //vodka
    RecipeItem.create({recipeId: 17, itemId: 16}), //lime
    RecipeItem.create({recipeId: 17, itemId: 13}), //ice
    RecipeItem.create({recipeId: 17, itemId: 26}), //cocktail shaker
    //MARGARITA 18
    RecipeItem.create({recipeId: 18, itemId: 1, amount: '2 oz'}), //tequila
    RecipeItem.create({recipeId: 18, itemId: 10, amount: '1 oz'}), //orange liqueur
    RecipeItem.create({recipeId: 18, itemId: 16}), //lime
    RecipeItem.create({recipeId: 18, itemId: 23}), //salt
    RecipeItem.create({recipeId: 18, itemId: 13}), //ice
    RecipeItem.create({recipeId: 18, itemId: 26}), //cocktail shaker
    //CHAMPAGNE COCKTAIL 19
    RecipeItem.create({recipeId: 19, itemId: 7, amount: '3 oz'}), //champagne
    RecipeItem.create({recipeId: 19, itemId: 11, amount: '1/3 oz'}), //cognac
    RecipeItem.create({recipeId: 19, itemId: 19, amount: '2 dashes'}), //bitters
    RecipeItem.create({recipeId: 19, itemId: 20, amount: '1 cube'}), //sugar
    //WHITE RUSSIAN 20
    RecipeItem.create({recipeId: 20, itemId: 2, amount: '2 tbsp'}), //vodka
    RecipeItem.create({recipeId: 20, itemId: 12, amount: '2 tbsp'}), //coffee liqueor
    RecipeItem.create({recipeId: 20, itemId: 24, amount: '2 tbsp'}), //cream
    RecipeItem.create({recipeId: 20, itemId: 13}), //ice
    //MOJITO 21
    RecipeItem.create({recipeId: 21, itemId: 25, amount: '10'}), //mint leaves
    RecipeItem.create({recipeId: 21, itemId: 16, amount: '1/2'}), //lime
    RecipeItem.create({recipeId: 21, itemId: 20, amount: '2 tbsp'}), //sugar
    RecipeItem.create({recipeId: 21, itemId: 13}), //ice
    RecipeItem.create({recipeId: 21, itemId: 3, amount: '1.5 oz'}), //rum
    RecipeItem.create({recipeId: 21, itemId: 14, amount: '1/2 cup'}), //club soda
    RecipeItem.create({recipeId: 21, itemId: 28}), //muddler
    // WATER 22
    //WHISKEY ON THE ROCKS 23
    RecipeItem.create({recipeId: 23, itemId: 5, amount: '2 oz'}), //whiskey
    RecipeItem.create({recipeId: 23, itemId: 13}), //ice
    //BOURBON ON THE ROCKS 24
    RecipeItem.create({recipeId: 24, itemId: 6, amount: '2 oz'}), //bourbon
    RecipeItem.create({recipeId: 24, itemId: 13}) //ice
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
