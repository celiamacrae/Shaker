import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Cocktails extends React.Component {
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

  render() {
    return (
      <div className="here">
        {this.props.cocktails ? (
          <div id="goodcocktials">
            <h1>Cocktails</h1>
            {this.props.cocktails.map(cocktail => {
              if (this.props.cocktails.length > 1) {
                if (cocktail !== 'Water') {
                  return (
                    <div key={cocktail}>
                      <Link to={`/recipes/${this.urlify(cocktail)}`}>
                        {cocktail}
                      </Link>
                    </div>
                  )
                }
              } else {
                return (
                  <div key={cocktail}>
                    <Link to={`/recipes/${this.urlify(cocktail)}`}>
                      {cocktail}
                    </Link>
                  </div>
                )
              }
            })}
          </div>
        ) : (
          <div />
        )}
      </div>
    )
  }
}

const mapState = state => ({
  cocktails: state.cocktails
})

export default connect(mapState)(Cocktails)
