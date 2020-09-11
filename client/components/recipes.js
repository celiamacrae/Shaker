import React from 'react'
import {connect} from 'react-redux'
import {fetchRecipes} from '../store/recipes'
import {Link} from 'react-router-dom'

class Recipes extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.urlify = this.urlify.bind(this)
  }

  urlify(name) {
    let words = name
      .toLowerCase()
      .split(' ')
      .join('_')
    return words
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div>
        <h1>RECIPES:</h1>
        <div id="allrec">
          {/* <ol> */}
          {this.props.recipes.map(recipe => {
            if (recipe.name !== 'Water') {
              return (
                <div key={recipe.id} id="singlerec">
                  {/* <li> */}
                  <img id="all_cocktail_img" src={recipe.imageURL} />
                  <Link to={`/recipes/${this.urlify(recipe.name)}`}>
                    {recipe.name}
                  </Link>
                  {/* </li> */}
                </div>
              )
            }
          })}
          {/* </ol> */}
        </div>
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
