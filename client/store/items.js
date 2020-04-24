import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ALL_ITEMS = 'GET_ALL_ITEMS'

/**
 * INITIAL STATE
 */
const defaultItems = []

/**
 * ACTION CREATORS
 */
const getItems = items => ({type: GET_ALL_ITEMS, items})

/**
 * THUNK CREATORS
 */
export const fetchItems = () => async dispatch => {
  try {
    const res = await axios.get('/api/items')
    dispatch(getItems(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultItems, action) {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return action.items
    default:
      return state
  }
}
