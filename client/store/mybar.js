import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ADD_TO_BAR = 'ADD_TO_BAR'
const REMOVE_FROM_BAR = 'REMOVE_FROM_BAR'

/**
 * INITIAL STATE
 */
const defaultBar = []

/**
 * ACTION CREATORS
 */
export const addToBar = item => ({type: ADD_TO_BAR, item})
export const removeFromBar = item => ({type: REMOVE_FROM_BAR, item})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function(state = defaultBar, action) {
  switch (action.type) {
    case ADD_TO_BAR:
      return [...state, action.item]
    case REMOVE_FROM_BAR:
      return state.filter(item => item !== action.item)
    default:
      return state
  }
}
