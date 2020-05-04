import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {UserHome, Recipes, SingleCocktail, Shaker} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/recipes/:name" component={SingleCocktail} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/shaker" component={Shaker} />
        <Route path="/home" component={UserHome} />
        <Route path="/" component={Shaker} />
      </Switch>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(null, mapDispatch)(Routes))
