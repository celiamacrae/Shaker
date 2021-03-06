const {RecipeItem} = require('../../server/db/models')

let ingreds = {
  bourbon: 1,
  campari: 2,
  champagne: 3,
  coffeeLiqueur: 4,
  cognac: 5,
  gin: 6,
  orangeLiqueur: 7,
  rum: 8,
  tequila: 9,
  vermouth: 10,
  vodka: 11,
  whiskey: 12,
  bitters: 13,
  celery: 14, //newnew
  clubSoda: 15,
  cream: 16,
  cranjuice: 17, //new
  gingerBeer: 18,
  greenOlives: 19, //newnew
  grenadine: 20, //new
  honey: 21,
  hotsauce: 22, //newnew
  ice: 23,
  lemon: 24,
  lemonjuice: 25, //new
  lime: 26,
  limejuice: 27,
  maraschinocherry: 28, //new
  mint: 29,
  orange: 30,
  oj: 31,
  pepper: 32, //newnew
  pineapplejuice: 33, //new
  salt: 34,
  sugar: 35,
  sparklingWater: 36, //newnew
  sprite: 37, //newnew
  simpleSyrup: 38,
  tomatojuice: 39, //new
  tonic: 40,
  worcestershire: 41, //newnew
  blender: 42,
  shaker: 43,
  muddler: 44
}

const recipesitems = [
  //AMERICANO 1
  {recipeId: 1, itemId: ingreds.campari, amount: '1.5 oz'}, //campari
  {recipeId: 1, itemId: ingreds.vermouth, amount: '1.5 oz'}, //vermouth
  {recipeId: 1, itemId: ingreds.clubSoda, amount: '1 splash'}, //club soda
  {recipeId: 1, itemId: ingreds.ice}, //ice

  //BLOODY MARY 2
  {recipeId: 2, itemId: ingreds.salt, amount: '1 tsp'}, //salt
  {recipeId: 2, itemId: ingreds.ice, amount: '1 cup'}, //ice
  {recipeId: 2, itemId: ingreds.vodka, amount: '1.5 oz'}, //vodka
  {recipeId: 2, itemId: ingreds.tomatojuice, amount: '3/4 cup'}, //tomato juice
  {recipeId: 2, itemId: ingreds.hotsauce, amount: '1 dash'}, //hot sauce
  {recipeId: 2, itemId: ingreds.pepper}, //pepper
  {recipeId: 2, itemId: ingreds.celery, amount: '1 stalk'}, //celery
  {recipeId: 2, itemId: ingreds.greenOlives, amount: '2'}, //green olives

  //BOURBON ON THE ROCKS 3
  {recipeId: 3, itemId: ingreds.bourbon, amount: '2 oz'}, //bourbon
  {recipeId: 3, itemId: ingreds.ice}, //ice

  //CHAMPAGNE COCKTAIL 4
  {recipeId: 4, itemId: ingreds.champagne, amount: '3 oz'}, //champagne
  {recipeId: 4, itemId: ingreds.cognac, amount: '1/3 oz'}, //cognac
  {recipeId: 4, itemId: ingreds.bitters, amount: '2 dashes'}, //bitters
  {recipeId: 4, itemId: ingreds.sugar, amount: '1 cube'}, //sugar

  //DARK AND STORMY 5
  {recipeId: 5, itemId: ingreds.rum, amount: '2 oz'}, //rum
  {recipeId: 5, itemId: ingreds.gingerBeer, amount: '3 oz'}, //ginger beer
  {recipeId: 5, itemId: ingreds.limejuice, amount: '0.5 oz'}, //lime juice
  {recipeId: 5, itemId: ingreds.ice}, //ice

  //DAIQUIRI 6
  {recipeId: 6, itemId: ingreds.rum, amount: '2 oz'}, //rum
  {recipeId: 6, itemId: ingreds.simpleSyrup}, //simple syrup
  {recipeId: 6, itemId: ingreds.lime}, //lime
  {recipeId: 6, itemId: ingreds.ice}, //ice

  //GIN & TONIC 7
  {recipeId: 7, itemId: ingreds.gin, amount: '2 oz'}, //gin
  {recipeId: 7, itemId: ingreds.tonic}, //tonic water
  {recipeId: 7, itemId: ingreds.ice}, //ice

  //GIN MARTINI 8
  {recipeId: 8, itemId: ingreds.gin, amount: '2 oz'}, //gin
  {recipeId: 8, itemId: ingreds.vermouth, amount: '1 oz'}, //vermouth
  {recipeId: 8, itemId: ingreds.ice}, //ice

  //GIN GIMLET 9
  {recipeId: 9, itemId: ingreds.gin, amount: '2 oz'}, //gin
  {recipeId: 9, itemId: ingreds.lime}, //lime
  {recipeId: 9, itemId: ingreds.ice}, //ice
  {recipeId: 9, itemId: ingreds.shaker}, //cocktail shaker

  //HOT TODDY 10
  {recipeId: 10, itemId: ingreds.honey, amount: '2-3 tsp'}, //honey
  {recipeId: 10, itemId: ingreds.lemon, amount: '2-3 tsp'}, //lemon
  {recipeId: 10, itemId: ingreds.whiskey, amount: '2 oz'}, //honey

  //MANHATTAN 11
  {recipeId: 11, itemId: ingreds.whiskey, amount: '2 oz'}, //whiskey
  {recipeId: 11, itemId: ingreds.vermouth, amount: '1 oz'}, //vermouth
  {recipeId: 11, itemId: ingreds.bitters, amount: '2 dashes'}, //bitters
  {recipeId: 11, itemId: ingreds.ice}, //ice

  //MARGARITA 12
  {recipeId: 12, itemId: ingreds.tequila, amount: '2 oz'}, //tequila
  {recipeId: 12, itemId: ingreds.orangeLiqueur, amount: '1 oz'}, //orange liqueur
  {recipeId: 12, itemId: ingreds.lime}, //lime
  {recipeId: 12, itemId: ingreds.salt}, //salt
  {recipeId: 12, itemId: ingreds.ice}, //ice
  {recipeId: 12, itemId: ingreds.shaker}, //cocktail shaker

  //MIMOSA 13
  {recipeId: 13, itemId: ingreds.oj}, //orange juice
  {recipeId: 13, itemId: ingreds.champagne}, //champagne

  //MOJITO 14
  {recipeId: 14, itemId: ingreds.mint, amount: '10'}, //mint leaves
  {recipeId: 14, itemId: ingreds.lime, amount: '1/2'}, //lime
  {recipeId: 14, itemId: ingreds.sugar, amount: '2 tbsp'}, //sugar
  {recipeId: 14, itemId: ingreds.ice}, //ice
  {recipeId: 14, itemId: ingreds.rum, amount: '1.5 oz'}, //rum
  {recipeId: 14, itemId: ingreds.clubSoda, amount: '1/2 cup'}, //club soda
  {recipeId: 14, itemId: ingreds.muddler}, //muddler

  //MOSCOW MULE 15
  {recipeId: 15, itemId: ingreds.vodka, amount: '1.5 oz'}, //vodka
  {recipeId: 15, itemId: ingreds.lime}, //lime
  {recipeId: 15, itemId: ingreds.gingerBeer}, //ginger beer
  {recipeId: 15, itemId: ingreds.ice}, //ice

  //NEGRONI 16
  {recipeId: 16, itemId: ingreds.gin, amount: '1 oz'}, //gin
  {recipeId: 16, itemId: ingreds.vermouth, amount: '1 oz'}, //vermouth
  {recipeId: 16, itemId: ingreds.campari, amount: '1 oz'}, //campari
  {recipeId: 16, itemId: ingreds.ice}, //ice

  //OLD FASHIONED 17
  {recipeId: 17, itemId: ingreds.bourbon, amount: '2 oz'}, //bourbon
  {recipeId: 17, itemId: ingreds.bitters, amount: '3 dashes'}, //bitters
  {recipeId: 17, itemId: ingreds.sugar, amount: '1 teaspoon'}, //sugar
  {recipeId: 17, itemId: ingreds.orange, amount: '1 peel of'}, //orange
  {recipeId: 17, itemId: ingreds.ice, amount: '3 cubes'}, //ice

  //SIDECAR 18
  {recipeId: 18, itemId: ingreds.cognac, amount: '2 oz'}, //cognac
  {recipeId: 18, itemId: ingreds.orangeLiqueur, amount: '3/4 oz'}, //orange liqueur
  {recipeId: 18, itemId: ingreds.ice}, //ice
  {recipeId: 18, itemId: ingreds.lemon, amount: '3/4 oz'}, //lemon juice
  {recipeId: 18, itemId: ingreds.sugar}, //sugar
  {recipeId: 18, itemId: ingreds.orange}, //orange

  //SPARKLING CAMPARI ORANGE COCKTAIL 19
  {recipeId: 19, itemId: ingreds.ice}, //ice
  {recipeId: 19, itemId: ingreds.campari, amount: '1 oz'}, //campari
  {recipeId: 19, itemId: ingreds.oj, amount: '2 oz'}, //orange juice
  {recipeId: 19, itemId: ingreds.sparklingWater, amount: '1 oz'}, //sparkling water

  //TEQUILA ON THE ROCKS 20
  {recipeId: 20, itemId: ingreds.tequila, amount: '2 oz'}, //tequila
  {recipeId: 20, itemId: ingreds.ice}, //ice

  //TEQUILA SODA 21
  {recipeId: 21, itemId: ingreds.tequila, amount: '2 oz'}, //tequila
  {recipeId: 21, itemId: ingreds.clubSoda}, //club soda
  {recipeId: 21, itemId: ingreds.ice}, //ice

  //TOM COLLINS 22
  {recipeId: 22, itemId: ingreds.gin, amount: '2 oz'}, //gin
  {recipeId: 22, itemId: ingreds.lemonjuice, amount: '1 oz'}, //lemon juice
  {recipeId: 22, itemId: ingreds.simpleSyrup, amount: '1/2 oz'}, //simple syrup
  {recipeId: 22, itemId: ingreds.clubSoda}, //club soda
  {recipeId: 22, itemId: ingreds.ice}, //ice

  //VODKA GIMLET 23
  {recipeId: 23, itemId: ingreds.vodka, amount: '2 oz'}, //vodka
  {recipeId: 23, itemId: ingreds.lime}, //lime
  {recipeId: 23, itemId: ingreds.ice}, //ice
  {recipeId: 23, itemId: ingreds.shaker}, //cocktail shaker

  //VODKA MARTINI 24
  {recipeId: 24, itemId: ingreds.vodka, amount: '2 oz'}, //vodka
  {recipeId: 24, itemId: ingreds.vermouth, amount: '1 oz'}, //vermouth
  {recipeId: 24, itemId: ingreds.ice}, //ice

  //VODKA ON THE ROCKS 25
  {recipeId: 25, itemId: ingreds.vodka, amount: '2 oz'}, //vodka
  {recipeId: 25, itemId: ingreds.ice}, //ice

  //VODKA SODA 26
  {recipeId: 26, itemId: ingreds.vodka, amount: '2 oz'}, //vodka
  {recipeId: 26, itemId: ingreds.clubSoda}, //club soda
  {recipeId: 26, itemId: ingreds.ice}, //ice

  //WHISKEY ON THE ROCKS 27
  {recipeId: 27, itemId: ingreds.whiskey, amount: '2 oz'}, //whiskey
  {recipeId: 27, itemId: ingreds.ice}, //ice

  //WHISKEY SOUR 28
  {recipeId: 28, itemId: ingreds.whiskey, amount: '2 oz'}, //whiskey
  {recipeId: 28, itemId: ingreds.lemon, amount: '3/4 oz'}, //lemon juice
  {recipeId: 28, itemId: ingreds.simpleSyrup, amount: '3/4 oz'}, //simple syrup
  {recipeId: 28, itemId: ingreds.ice}, //ice

  //WHISKEY SOUR PARTY PUNCH 29
  {recipeId: 29, itemId: ingreds.oj, amount: '2.5 cups'}, //orange juice
  {recipeId: 29, itemId: ingreds.bourbon, amount: '1 cup'}, //orange juice
  {recipeId: 29, itemId: ingreds.orangeLiqueur, amount: '1.5 cups'}, //orange liqueor
  {recipeId: 29, itemId: ingreds.lemonjuice, amount: '0.5 cups'}, //lemon juice
  {recipeId: 29, itemId: ingreds.sprite, amount: '3 cups'}, //sprite

  //WHITE RUSSIAN 30
  {recipeId: 30, itemId: ingreds.vodka, amount: '2 tbsp'}, //vodka
  {recipeId: 30, itemId: ingreds.coffeeLiqueur, amount: '2 tbsp'}, //coffee liqueor
  {recipeId: 30, itemId: ingreds.cream, amount: '2 tbsp'}, //cream
  {recipeId: 30, itemId: ingreds.ice} //ice

  // WATER 31
]

const seedRIs = () => Promise.all(recipesitems.map(ri => RecipeItem.create(ri)))

module.exports = seedRIs
