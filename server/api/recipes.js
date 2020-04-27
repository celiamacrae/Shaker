const router = require('express').Router()
const {Recipe, Item} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const recipes = await Recipe.findAll({include: [Item]})
    res.json(recipes)
  } catch (err) {
    next(err)
  }
})

router.get('/:name', async (req, res, next) => {
  try {
    console.log('BACKEND', req.params.name)
    const recipe = await Recipe.findOne({
      where: {urlifyName: req.params.name},
      include: [Item]
    })
    console.log(recipe)
    res.json(recipe)
  } catch (err) {
    next(err)
  }
})
