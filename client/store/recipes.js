import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_RECIPES = 'GET_ALL_RECIPES'

/**
 * INITIAL STATE
 */
const defaultRecipes = []

/**
 * ACTION CREATORS
 */
const getRecipes = recipes => ({type: GET_ALL_RECIPES, recipes})

/**
 * THUNK CREATORS
 */
export const fetchRecipes = () => async dispatch => {
  try {
    const res = await axios.get('/api/recipes')
    dispatch(getRecipes(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultRecipes, action) {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return action.recipes
    default:
      return state
  }
}
