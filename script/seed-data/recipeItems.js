const recipesitems = [
  //TEQUILA SODA 1
  {recipeId: 1, itemId: 1, amount: '2 oz'}, //tequila
  {recipeId: 1, itemId: 14}, //club soda
  {recipeId: 1, itemId: 13}, //ice
  //VODKA SODA 2
  {recipeId: 2, itemId: 2, amount: '2 oz'}, //vodka
  {recipeId: 2, itemId: 14}, //club soda
  {recipeId: 2, itemId: 13}, //ice
  //VODKA ON THE ROCKS 3
  {recipeId: 3, itemId: 2, amount: '2 oz'}, //vodka
  {recipeId: 3, itemId: 13}, //ice
  //TEQUILA ON THE ROCKS 4
  {recipeId: 4, itemId: 1, amount: '2 oz'}, //tequila
  {recipeId: 4, itemId: 13}, //ice
  //MOSCOW MULE 5
  {recipeId: 5, itemId: 2, amount: '1.5 oz'}, //vodka
  {recipeId: 5, itemId: 16}, //lime
  {recipeId: 5, itemId: 18}, //ginger beer
  {recipeId: 5, itemId: 13}, //ice
  //OLD FASHIONED 6
  {recipeId: 6, itemId: 6, amount: '2 oz'}, //bourbon
  {recipeId: 6, itemId: 19, amount: '3 dashes'}, //bitters
  {recipeId: 6, itemId: 20, amount: '1 teaspoon'}, //sugar
  {recipeId: 6, itemId: 17, amount: '1 peel of'}, //orange
  {recipeId: 6, itemId: 13, amount: '3 cubes'}, //ice
  //GIN & TONIC 7
  {recipeId: 7, itemId: 4, amount: '2 oz'}, //gin
  {recipeId: 7, itemId: 21}, //tonic water
  {recipeId: 7, itemId: 13}, //ice
  //DAIQUIRI 8
  {recipeId: 8, itemId: 3, amount: '2 oz'}, //rum
  {recipeId: 8, itemId: 22}, //simple syrup
  {recipeId: 8, itemId: 16}, //lime
  {recipeId: 8, itemId: 13}, //ice
  //WHISKEY SOUR 9
  {recipeId: 9, itemId: 5, amount: '2 oz'}, //whiskey
  {recipeId: 9, itemId: 15, amount: '3/4 oz'}, //lemon juice
  {recipeId: 9, itemId: 22, amount: '3/4 oz'}, //simple syrup
  {recipeId: 9, itemId: 13}, //ice
  //DARK AND STORMY 10
  {recipeId: 10, itemId: 3, amount: '1 part'}, //rum
  {recipeId: 10, itemId: 18, amount: '2 parts'}, //ginger beer
  {recipeId: 10, itemId: 16}, //lime
  {recipeId: 10, itemId: 13}, //ice
  //NEGRONI 11
  {recipeId: 11, itemId: 4, amount: '1 oz'}, //gin
  {recipeId: 11, itemId: 9, amount: '1 oz'}, //vermouth
  {recipeId: 11, itemId: 8, amount: '1 oz'}, //campari
  {recipeId: 11, itemId: 13}, //ice
  //GIN MARTINI 12
  {recipeId: 12, itemId: 4, amount: '2 oz'}, //gin
  {recipeId: 12, itemId: 9, amount: '1 oz'}, //vermouth
  {recipeId: 12, itemId: 13}, //ice
  //VODKA MARTINI 13
  {recipeId: 13, itemId: 2, amount: '2 oz'}, //vodka
  {recipeId: 13, itemId: 9, amount: '1 oz'}, //vermouth
  {recipeId: 13, itemId: 13}, //ice
  //MANHATTAN 14
  {recipeId: 14, itemId: 5, amount: '2 oz'}, //whiskey
  {recipeId: 14, itemId: 9, amount: '1 oz'}, //vermouth
  {recipeId: 14, itemId: 19, amount: '2 dashes'}, //bitters
  {recipeId: 14, itemId: 13}, //ice
  //SIDECAR 15
  {recipeId: 15, itemId: 11, amount: '2 oz'}, //cognac
  {recipeId: 15, itemId: 10, amount: '3/4 oz'}, //orange liqueur
  {recipeId: 15, itemId: 13}, //ice
  {recipeId: 15, itemId: 15, amount: '3/4 oz'}, //lemon juice
  {recipeId: 15, itemId: 20}, //sugar
  {recipeId: 15, itemId: 17}, //orange
  //GIN GIMLET 16
  {recipeId: 16, itemId: 4, amount: '2 oz'}, //gin
  {recipeId: 16, itemId: 16}, //lime
  {recipeId: 16, itemId: 13}, //ice
  {recipeId: 16, itemId: 26}, //cocktail shaker
  //VODKA GIMLET 17
  {recipeId: 17, itemId: 2, amount: '2 oz'}, //vodka
  {recipeId: 17, itemId: 16}, //lime
  {recipeId: 17, itemId: 13}, //ice
  {recipeId: 17, itemId: 26}, //cocktail shaker
  //MARGARITA 18
  {recipeId: 18, itemId: 1, amount: '2 oz'}, //tequila
  {recipeId: 18, itemId: 10, amount: '1 oz'}, //orange liqueur
  {recipeId: 18, itemId: 16}, //lime
  {recipeId: 18, itemId: 23}, //salt
  {recipeId: 18, itemId: 13}, //ice
  {recipeId: 18, itemId: 26}, //cocktail shaker
  //CHAMPAGNE COCKTAIL 19
  {recipeId: 19, itemId: 7, amount: '3 oz'}, //champagne
  {recipeId: 19, itemId: 11, amount: '1/3 oz'}, //cognac
  {recipeId: 19, itemId: 19, amount: '2 dashes'}, //bitters
  {recipeId: 19, itemId: 20, amount: '1 cube'}, //sugar
  //WHITE RUSSIAN 20
  {recipeId: 20, itemId: 2, amount: '2 tbsp'}, //vodka
  {recipeId: 20, itemId: 12, amount: '2 tbsp'}, //coffee liqueor
  {recipeId: 20, itemId: 24, amount: '2 tbsp'}, //cream
  {recipeId: 20, itemId: 13}, //ice
  //MOJITO 21
  {recipeId: 21, itemId: 25, amount: '10'}, //mint leaves
  {recipeId: 21, itemId: 16, amount: '1/2'}, //lime
  {recipeId: 21, itemId: 20, amount: '2 tbsp'}, //sugar
  {recipeId: 21, itemId: 13}, //ice
  {recipeId: 21, itemId: 3, amount: '1.5 oz'}, //rum
  {recipeId: 21, itemId: 14, amount: '1/2 cup'}, //club soda
  {recipeId: 21, itemId: 28}, //muddler
  // WATER 22

  //WHISKEY ON THE ROCKS 23
  {recipeId: 23, itemId: 5, amount: '2 oz'}, //whiskey
  {recipeId: 23, itemId: 13}, //ice
  //BOURBON ON THE ROCKS 24
  {recipeId: 24, itemId: 6, amount: '2 oz'}, //bourbon
  {recipeId: 24, itemId: 13}, //ice
  //AMERICANO 25
  {recipeId: 25, itemId: 8, amount: '1.5 oz'}, //campari
  {recipeId: 25, itemId: 9, amount: '1.5 oz'}, //vermouth
  {recipeId: 25, itemId: 14, amount: '1 splash'}, //club soda
  {recipeId: 25, itemId: 13} //ice
]

module.exports = recipesitems
