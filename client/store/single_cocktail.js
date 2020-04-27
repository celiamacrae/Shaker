import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_SINGLE_COCKTAIL = 'GET_SINGLE_COCKTAIL'

/**
 * INITIAL STATE
 */
const defaultCocktail = {}

/**
 * ACTION CREATORS
 */
const getSingleCocktail = cocktail => ({type: GET_SINGLE_COCKTAIL, cocktail})

/**
 * THUNK CREATORS
 */

export const fetchSingleCocktail = name => async dispatch => {
  try {
    const res = await axios.get(`/api/recipes/${name}`)
    dispatch(getSingleCocktail(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultCocktail, action) {
  switch (action.type) {
    case GET_SINGLE_COCKTAIL:
      return action.cocktail
    default:
      return state
  }
}
