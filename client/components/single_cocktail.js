import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleCocktail} from '../store/single_cocktail'

class SingleCocktail extends React.Component {
  componentDidMount() {
    this.props.fetchSingleCocktail()
  }

  render() {
    // console.log(this.props.cocktail)
    return (
      <div>
        <h1>{this.props.cocktail.name}</h1>
        {this.props.cocktail.description ? (
          <h4>{this.props.cocktail.description}</h4>
        ) : (
          <h3 />
        )}
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
