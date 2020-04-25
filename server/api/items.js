const router = require('express').Router()
const {Item} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()
    res.json(items)
  } catch (err) {
    next(err)
  }
})

// router.get('/liquor', async (req, res, next) => {
//   try {
//     const items = await Item.findAll({
//       where: {
//         category : 'liquor'
//       }
//     })
//     res.json(items)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/accesory', async (req, res, next) => {
//   try {
//     const items = await Item.findAll({
//       where: {
//         category : 'accesory'
//       }
//     })
//     res.json(items)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/ingredient', async (req, res, next) => {
//   try {
//     const items = await Item.findAll({
//       where: {
//         category : 'ingredient'
//       }
//     })
//     res.json(items)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/:itemType', async (req, res, next) => {
  try {
    const items = await Item.findAll({
      where: {
        category: req.params.itemType
      }
    })
    res.json(items)
  } catch (err) {
    next(err)
  }
})
