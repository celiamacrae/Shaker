const {Item} = require('../../server/db/models')

const ice = {name: 'Ice', category: 'ingredient'}
const clubSoda = {
  name: 'Club Soda',
  category: 'ingredient'
}
const lemon = {name: 'Lemon', category: 'ingredient'}
const lemonjuice = {name: 'Lemon Juice', category: 'ingredient'}
const lime = {name: 'Lime', category: 'ingredient'}
const limejuice = {name: 'Lime Juice', category: 'ingredient'}
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
const mcherries = {name: 'Maraschino Cherry', category: 'ingredient'}
const grenadine = {name: 'Grenadine', category: 'ingredient'}
const pineapplejuice = {name: 'Pinapple Juice', category: 'ingredient'}
const cranberryjuice = {name: 'Cranberry Juice', category: 'ingredient'}
const tomatojuice = {name: 'Tomato Juice', category: 'ingredient'}
const pepper = {name: 'Pepper', category: 'ingredient'}
const worcestershire = {name: 'Worcestershire Sauce', category: 'ingredient'}
const hotsauce = {name: 'Hot Sauce', category: 'ingredient'}
const celery = {name: 'Celery', category: 'ingredient'}
const greenOlives = {name: 'Green Olives', category: 'ingredient'}
const sparklingWater = {name: 'Sparkling Water', category: 'ingredient'}

async function seedIngredients() {
  await Item.create(bitters)
  await Item.create(celery)
  await Item.create(clubSoda)
  await Item.create(cream)
  await Item.create(cranberryjuice)
  await Item.create(gingerBeer)
  await Item.create(greenOlives)
  await Item.create(grenadine)
  await Item.create(honey)
  await Item.create(hotsauce)
  await Item.create(ice)
  await Item.create(lemon)
  await Item.create(lemonjuice)
  await Item.create(lime)
  await Item.create(limejuice)
  await Item.create(mcherries)
  await Item.create(mint)
  await Item.create(orange)
  await Item.create(oj)
  await Item.create(pepper)
  await Item.create(pineapplejuice)
  await Item.create(salt)
  await Item.create(sugar)
  await Item.create(sparklingWater)
  await Item.create(syrup)
  await Item.create(tomatojuice)
  await Item.create(tonic)
  await Item.create(worcestershire)
}

module.exports = {seedIngredients}
