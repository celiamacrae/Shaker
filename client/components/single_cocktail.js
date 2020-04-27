import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleCocktail} from '../store/single_cocktail'

class SingleCocktail extends React.Component {
  componentDidMount() {
    this.props.fetchSingleCocktail()
  }

  render() {
    console.log(this.props.cocktail)
    return (
      <div id="cocktail_container">
        <h1>{this.props.cocktail.name}</h1>

        <div>
          <h3>Ingredients:</h3>
          <ul>
            {this.props.cocktail.items ? (
              this.props.cocktail.items.map(item => {
                return (
                  <li key={item.id}>
                    {item.recipeitem.amount} {item.name}
                  </li>
                )
              })
            ) : (
              <div />
            )}
          </ul>
        </div>

        <div>
          <h3>Recipe:</h3>
          {this.props.cocktail.description ? (
            <ul>
              {this.props.cocktail.description.split('$').map(line => {
                return <li>{line}</li>
              })}
            </ul>
          ) : (
            <h3 />
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  cocktail: state.singleCocktail
})

const mapDispatch = (dispatch, ownProps) => ({
  fetchSingleCocktail: () =>
    dispatch(fetchSingleCocktail(ownProps.match.params.name))
})

export default connect(mapState, mapDispatch)(SingleCocktail)
