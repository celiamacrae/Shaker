import React from 'react'
import {connect} from 'react-redux'
import {fetchRecipes} from '../store/recipes'

class Recipes extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    console.log(this.props.recipes)
    return (
      <div>
        <h1>RECIPES:</h1>
        <ul>
          {this.props.recipes.map(recipe => {
            return <li key={recipe.id}>{recipe.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapState = state => ({
  recipes: state.recipes
})

const mapDispatch = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes())
})

export default connect(mapState, mapDispatch)(Recipes)
