const router = require('express').Router()
const {Recipe} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Recipe.findAll()
    res.json(items)
  } catch (err) {
    next(err)
  }
})
