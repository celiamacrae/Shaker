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
  clubSoda: 14,
  cream: 15,
  cranjuice: 16, //new
  gingerBeer: 17,
  grenadine: 18, //new
  honey: 19,
  ice: 20,
  lemon: 21,
  lemonjuice: 22, //new
  lime: 23,
  limejuice: 24,
  maraschinocherry: 25, //new
  mint: 26,
  orange: 27,
  oj: 28,
  pineapplejuice: 29, //new
  salt: 30,
  sugar: 31,
  simpleSyrup: 32,
  tomatojuice: 33, //new
  tonic: 34,
  blender: 35,
  shaker: 36,
  muddler: 37
}

const recipesitems = [
  //AMERICANO 1
  {recipeId: 1, itemId: ingreds.campari, amount: '1.5 oz'}, //campari
  {recipeId: 1, itemId: ingreds.vermouth, amount: '1.5 oz'}, //vermouth
  {recipeId: 1, itemId: ingreds.clubSoda, amount: '1 splash'}, //club soda
  {recipeId: 1, itemId: ingreds.ice}, //ice

  //BOURBON ON THE ROCKS 2
  {recipeId: 2, itemId: ingreds.bourbon, amount: '2 oz'}, //bourbon
  {recipeId: 2, itemId: ingreds.ice}, //ice

  //CHAMPAGNE COCKTAIL 3
  {recipeId: 3, itemId: ingreds.champagne, amount: '3 oz'}, //champagne
  {recipeId: 3, itemId: ingreds.cognac, amount: '1/3 oz'}, //cognac
  {recipeId: 3, itemId: ingreds.bitters, amount: '2 dashes'}, //bitters
  {recipeId: 3, itemId: ingreds.sugar, amount: '1 cube'}, //sugar

  //DARK AND STORMY 4
  {recipeId: 4, itemId: ingreds.rum, amount: '2 oz'}, //rum
  {recipeId: 4, itemId: ingreds.gingerBeer, amount: '3 oz'}, //ginger beer
  {recipeId: 4, itemId: ingreds.limejuice, amount: '0.5 oz'}, //lime juice
  {recipeId: 4, itemId: ingreds.ice}, //ice

  //DAIQUIRI 5
  {recipeId: 5, itemId: ingreds.rum, amount: '2 oz'}, //rum
  {recipeId: 5, itemId: ingreds.simpleSyrup}, //simple syrup
  {recipeId: 5, itemId: ingreds.lime}, //lime
  {recipeId: 5, itemId: ingreds.ice}, //ice

  //GIN & TONIC 6
  {recipeId: 6, itemId: ingreds.gin, amount: '2 oz'}, //gin
  {recipeId: 6, itemId: ingreds.tonic}, //tonic water
  {recipeId: 6, itemId: ingreds.ice}, //ice

  //GIN MARTINI 7
  {recipeId: 7, itemId: ingreds.gin, amount: '2 oz'}, //gin
  {recipeId: 7, itemId: ingreds.vermouth, amount: '1 oz'}, //vermouth
  {recipeId: 7, itemId: ingreds.ice}, //ice

  //GIN GIMLET 8
  {recipeId: 8, itemId: ingreds.gin, amount: '2 oz'}, //gin
  {recipeId: 8, itemId: ingreds.lime}, //lime
  {recipeId: 8, itemId: ingreds.ice}, //ice
  {recipeId: 8, itemId: ingreds.shaker}, //cocktail shaker

  //HOT TODDY 9
  {recipeId: 9, itemId: ingreds.honey, amount: '2-3 tsp'}, //honey
  {recipeId: 9, itemId: ingreds.lemon, amount: '2-3 tsp'}, //lemon
  {recipeId: 9, itemId: ingreds.whiskey, amount: '2 oz'}, //honey

  //MANHATTAN 10
  {recipeId: 10, itemId: ingreds.whiskey, amount: '2 oz'}, //whiskey
  {recipeId: 10, itemId: ingreds.vermouth, amount: '1 oz'}, //vermouth
  {recipeId: 10, itemId: ingreds.bitters, amount: '2 dashes'}, //bitters
  {recipeId: 10, itemId: ingreds.ice}, //ice

  //MARGARITA 11
  {recipeId: 11, itemId: ingreds.tequila, amount: '2 oz'}, //tequila
  {recipeId: 11, itemId: ingreds.orangeLiqueur, amount: '1 oz'}, //orange liqueur
  {recipeId: 11, itemId: ingreds.lime}, //lime
  {recipeId: 11, itemId: ingreds.salt}, //salt
  {recipeId: 11, itemId: ingreds.ice}, //ice
  {recipeId: 11, itemId: ingreds.shaker}, //cocktail shaker

  //MIMOSA 12
  {recipeId: 12, itemId: ingreds.oj}, //orange juice
  {recipeId: 12, itemId: ingreds.champagne}, //champagne

  //MOJITO 13
  {recipeId: 13, itemId: ingreds.mint, amount: '10'}, //mint leaves
  {recipeId: 13, itemId: ingreds.lime, amount: '1/2'}, //lime
  {recipeId: 13, itemId: ingreds.sugar, amount: '2 tbsp'}, //sugar
  {recipeId: 13, itemId: ingreds.ice}, //ice
  {recipeId: 13, itemId: ingreds.rum, amount: '1.5 oz'}, //rum
  {recipeId: 13, itemId: ingreds.clubSoda, amount: '1/2 cup'}, //club soda
  {recipeId: 13, itemId: ingreds.muddler}, //muddler

  //MOSCOW MULE 14
  {recipeId: 14, itemId: ingreds.vodka, amount: '1.5 oz'}, //vodka
  {recipeId: 14, itemId: ingreds.lime}, //lime
  {recipeId: 14, itemId: ingreds.gingerBeer}, //ginger beer
  {recipeId: 14, itemId: ingreds.ice}, //ice

  //NEGRONI 15
  {recipeId: 15, itemId: ingreds.gin, amount: '1 oz'}, //gin
  {recipeId: 15, itemId: ingreds.vermouth, amount: '1 oz'}, //vermouth
  {recipeId: 15, itemId: ingreds.campari, amount: '1 oz'}, //campari
  {recipeId: 15, itemId: ingreds.ice}, //ice

  //OLD FASHIONED 16
  {recipeId: 16, itemId: ingreds.bourbon, amount: '2 oz'}, //bourbon
  {recipeId: 16, itemId: ingreds.bitters, amount: '3 dashes'}, //bitters
  {recipeId: 16, itemId: ingreds.sugar, amount: '1 teaspoon'}, //sugar
  {recipeId: 16, itemId: ingreds.orange, amount: '1 peel of'}, //orange
  {recipeId: 16, itemId: ingreds.ice, amount: '3 cubes'}, //ice

  //SIDECAR 17
  {recipeId: 17, itemId: ingreds.cognac, amount: '2 oz'}, //cognac
  {recipeId: 17, itemId: ingreds.orangeLiqueur, amount: '3/4 oz'}, //orange liqueur
  {recipeId: 17, itemId: ingreds.ice}, //ice
  {recipeId: 17, itemId: ingreds.lemon, amount: '3/4 oz'}, //lemon juice
  {recipeId: 17, itemId: ingreds.sugar}, //sugar
  {recipeId: 17, itemId: ingreds.orange}, //orange

  //TEQUILA ON THE ROCKS 18
  {recipeId: 18, itemId: ingreds.tequila, amount: '2 oz'}, //tequila
  {recipeId: 18, itemId: ingreds.ice}, //ice

  //TEQUILA SODA 19
  {recipeId: 19, itemId: ingreds.tequila, amount: '2 oz'}, //tequila
  {recipeId: 19, itemId: ingreds.clubSoda}, //club soda
  {recipeId: 19, itemId: ingreds.ice}, //ice

  //VODKA GIMLET 20
  {recipeId: 20, itemId: ingreds.vodka, amount: '2 oz'}, //vodka
  {recipeId: 20, itemId: ingreds.lime}, //lime
  {recipeId: 20, itemId: ingreds.ice}, //ice
  {recipeId: 20, itemId: ingreds.shaker}, //cocktail shaker

  //VODKA MARTINI 21
  {recipeId: 21, itemId: ingreds.vodka, amount: '2 oz'}, //vodka
  {recipeId: 21, itemId: ingreds.vermouth, amount: '1 oz'}, //vermouth
  {recipeId: 21, itemId: ingreds.ice}, //ice

  //VODKA ON THE ROCKS 22
  {recipeId: 22, itemId: ingreds.vodka, amount: '2 oz'}, //vodka
  {recipeId: 22, itemId: ingreds.ice}, //ice

  //VODKA SODA 23
  {recipeId: 23, itemId: ingreds.vodka, amount: '2 oz'}, //vodka
  {recipeId: 23, itemId: ingreds.clubSoda}, //club soda
  {recipeId: 23, itemId: ingreds.ice}, //ice

  //WHISKEY ON THE ROCKS 24
  {recipeId: 24, itemId: ingreds.whiskey, amount: '2 oz'}, //whiskey
  {recipeId: 24, itemId: ingreds.ice}, //ice

  //WHISKEY SOUR 25
  {recipeId: 25, itemId: ingreds.whiskey, amount: '2 oz'}, //whiskey
  {recipeId: 25, itemId: ingreds.lemon, amount: '3/4 oz'}, //lemon juice
  {recipeId: 25, itemId: ingreds.simpleSyrup, amount: '3/4 oz'}, //simple syrup
  {recipeId: 25, itemId: ingreds.ice}, //ice

  //WHITE RUSSIAN 26
  {recipeId: 26, itemId: ingreds.vodka, amount: '2 tbsp'}, //vodka
  {recipeId: 26, itemId: ingreds.coffeeLiqueur, amount: '2 tbsp'}, //coffee liqueor
  {recipeId: 26, itemId: ingreds.cream, amount: '2 tbsp'}, //cream
  {recipeId: 26, itemId: ingreds.ice} //ice

  // WATER 27
]

const seedRIs = () => Promise.all(recipesitems.map(ri => RecipeItem.create(ri)))

module.exports = seedRIs
