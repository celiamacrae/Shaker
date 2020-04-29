const {Item} = require('../../server/db/models')

const ice = {name: 'Ice', category: 'ingredient'}
const clubSoda = {
  name: 'Club Soda',
  category: 'ingredient'
}
const lemon = {name: 'Lemon', category: 'ingredient'}
const lime = {name: 'Lime', category: 'ingredient'}
const orange = {name: 'Orange', category: 'ingredient'}
const gingerBeer = {
  name: 'Ginger Beer',
  category: 'ingredient'
}
const bitters = {name: 'Bitters', category: 'ingredient'}
const sugar = {name: 'Sugar', category: 'ingredient'}
const tonic = {name: 'Tonic Water', category: 'ingredient'}
const syrup = {name: 'Simple Syrup', category: 'ingredient'}
const salt = {name: 'Salt', category: 'ingredient'}
const cream = {name: 'Heavy Cream', category: 'ingredient'}
const mint = {name: 'Mint Leaves', category: 'ingredient'}
const honey = {name: 'Honey', category: 'ingredient'}
const oj = {name: 'Orange Juice', category: 'ingredient'}

async function seedIngredients() {
  await Item.create(bitters)
  await Item.create(clubSoda)
  await Item.create(cream)
  await Item.create(gingerBeer)
  await Item.create(honey)
  await Item.create(ice)
  await Item.create(lemon)
  await Item.create(lime)
  await Item.create(mint)
  await Item.create(orange)
  await Item.create(oj)
  await Item.create(salt)
  await Item.create(sugar)
  await Item.create(syrup)
  await Item.create(tonic)
}

module.exports = {seedIngredients}
