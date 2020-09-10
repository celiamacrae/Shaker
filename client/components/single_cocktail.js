import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleCocktail} from '../store/single_cocktail'

class SingleCocktail extends React.Component {
  componentDidMount() {
    this.props.fetchSingleCocktail()
  }

  render() {
    let key1 = 0
    return (
      <div id="cocktail_container">
        <h1>{this.props.cocktail.name}</h1>

        <div id="ingreds">
          <img id="cocktail_img" src={this.props.cocktail.imageURL} />

          <div>
            <h3>Ingredients:</h3>
            <ul>
              {this.props.cocktail.items ? (
                this.props.cocktail.items.length > 0 ? (
                  this.props.cocktail.items.map(item => {
                    return (
                      <li key={item.id}>
                        {item.recipeitem.amount} {item.name}
                      </li>
                    )
                  })
                ) : (
                  <li>None. Drink more water.</li>
                )
              ) : (
                // <h1>HEY</h1>
                // <li>None</li>
                <div />
              )}
            </ul>
          </div>
        </div>

        <div>
          <h3>Recipe:</h3>
          {this.props.cocktail.description ? (
            <ul>
              {this.props.cocktail.description.split('$').map(line => {
                return <li key={key1++}>{line}</li>
              })}
            </ul>
          ) : (
            <p />
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
