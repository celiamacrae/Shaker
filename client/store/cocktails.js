import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SHAKE = 'SHAKE'
const CLEAR_COCKTAILS = 'CLEAR_COCKTAILS'

/**
 * INITIAL STATE
 */
const defaultCocktails = []

/**
 * ACTION CREATORS
 */
const shakeCocktails = cocktails => ({type: SHAKE, cocktails})
export const clearCocktails = () => ({type: CLEAR_COCKTAILS})

/**
 * THUNK CREATORS
 */

export const shake = myBarItems => async dispatch => {
  try {
    const res = await axios.get('/api/recipes')

    let recipes = {}

    res.data.forEach(recipe => {
      let items = []

      recipe.items.forEach(item => {
        items.push(item.name)
      })

      recipes[recipe.name] = items
    })

    let recipeNames = Object.keys(recipes)

    let goodRecipes = []

    console.log('here', recipeNames)
    recipeNames.forEach(recipeName => {
      console.log('YA', recipeName)
      let items = recipes[recipeName]
      let add = true

      items.forEach(item => {
        if (!myBarItems.includes(item)) {
          add = false
        }
      })
      if (add) {
        goodRecipes.push(recipeName)
      }
    })

    console.log('GOOD RECIPES', goodRecipes)

    dispatch(shakeCocktails(goodRecipes))

    // console.log("!!!", myBarItems)
    // console.log(recipes)
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultCocktails, action) {
  switch (action.type) {
    case SHAKE:
      return action.cocktails
    case CLEAR_COCKTAILS:
      return []
    default:
      return state
  }
}
