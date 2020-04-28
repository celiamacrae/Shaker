const {Item} = require('../../server/db/models')

const tequila = {name: 'Tequila', category: 'liquor'}
const vodka = {name: 'Vodka', category: 'liquor'}
const rum = {name: 'Rum', category: 'liquor'}
const gin = {name: 'Gin', category: 'liquor'}
const whiskey = {name: 'Whiskey', category: 'liquor'}
const bourbon = {name: 'Bourbon', category: 'liquor'}
const champagne = {name: 'Champagne', category: 'liquor'}
const campari = {name: 'Campari', category: 'liquor'}
const vermouth = {name: 'Vermouth', category: 'liquor'}
const orangeLiqueur = {
  name: 'Orange Liqueur',
  category: 'liquor'
}
const cognac = {name: 'Cognac', category: 'liquor'}
const coffeeLiqueur = {
  name: 'Coffee Liqueur',
  category: 'liquor'
}

async function seedLiquor() {
  await Item.create(bourbon)
  await Item.create(campari)
  await Item.create(champagne)
  await Item.create(coffeeLiqueur)
  await Item.create(cognac)
  await Item.create(gin)
  await Item.create(orangeLiqueur)
  await Item.create(rum)
  await Item.create(tequila)
  await Item.create(vermouth)
  await Item.create(vodka)
  await Item.create(whiskey)
}

module.exports = seedLiquor
