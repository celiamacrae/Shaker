import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import items from './items'
import recipes from './recipes'
import cocktails from './cocktails'
import singleCocktail from './single_cocktail'
import myBar from './mybar'

const reducer = combineReducers({
  items,
  recipes,
  cocktails,
  singleCocktail,
  myBar
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
