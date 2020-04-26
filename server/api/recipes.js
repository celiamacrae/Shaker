const router = require('express').Router()
const {Recipe, Item} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Recipe.findAll({include: [Item]})
    res.json(items)
  } catch (err) {
    next(err)
  }
})
