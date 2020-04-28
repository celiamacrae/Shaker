const {Item} = require('../../server/db/models')

const cocktailShaker = {
  name: 'Cocktail Shaker',
  category: 'accessory'
}
const blender = {name: 'Blender', category: 'accessory'}
const muddler = {name: 'Muddler', category: 'accessory'}

async function seedAccessories() {
  await Item.create(blender)
  await Item.create(cocktailShaker)
  await Item.create(muddler)
}

module.exports = {seedAccessories}
