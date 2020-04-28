import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../store/items'
import {shake, clearCocktails} from '../store/cocktails'
import {addToBar, removeFromBar} from '../store/mybar'
import {Link} from 'react-router-dom'
import Items from './items'

class Shaker extends React.Component {
  constructor() {
    super()
    this.state = {
      shake: false
    }
    this.addToBar = this.addToBar.bind(this)
    this.removeFromBar = this.removeFromBar.bind(this)
    this.shakeItUp = this.shakeItUp.bind(this)
    this.urlify = this.urlify.bind(this)
    this.shake2 = this.shake2.bind(this)
  }
  componentDidMount() {
    this.props.fetchItems()
  }

  addToBar(event) {
    if (!this.props.myBar.includes(event.target.value)) {
      this.props.add(event.target.value)
    }
  }

  removeFromBar(event) {
    this.props.remove(event.target.value)
  }

  urlify(name) {
    let words = name
      .toLowerCase()
      .split(' ')
      .join('_')
    return words
  }

  shakeItUp() {
    this.props.clearCocktails()
    this.setState({shake: true})
    setTimeout(() => this.shake2(), 2000)
  }

  shake2() {
    let bar = this.props.myBar
    this.props.shake(bar)
    this.setState({shake: false})
  }

  render() {
    console.log('here', this.props)
    console.log('HERE>>>>', this.state)
    return (
      <div>
        <div id="bar_cocktails">
          <div id="bar">
            <h1>MY BAR</h1>
            {/* <ul> */}
            {this.props.myBar.map(item => {
              return (
                <div id="bar_item" key={item}>
                  <li>{item}</li>

                  <br />
                  <button
                    value={item}
                    type="submit"
                    onClick={this.removeFromBar}
                  >
                    x
                  </button>
                </div>
              )
            })}
            {/* </ul> */}
          </div>

          {this.state.shake ? (
            <div id="dawg">
              <br />
              <img
                id="dog"
                src="https://media2.giphy.com/media/3o85xomqdEz6L0wS8o/200.gif"
              />
              <br />
              {this.props.myBar.length > 0 ? (
                <button id="shake" type="submit" onClick={this.shakeItUp}>
                  SHAKE IT UP
                </button>
              ) : (
                <p />
              )}
            </div>
          ) : (
            <div id="dawg">
              <br />
              <img id="dog" src="https://i.imgur.com/fzOHzri.png" />
              <br />
              {this.props.myBar.length > 0 ? (
                <button id="shake" type="submit" onClick={this.shakeItUp}>
                  SHAKE IT UP
                </button>
              ) : (
                <p />
              )}
            </div>
          )}

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

        <br />

        <Items />
      </div>
    )
  }
}

const mapState = state => ({
  items: state.items,
  cocktails: state.cocktails,
  myBar: state.myBar
})

const mapDispatch = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  shake: bar => dispatch(shake(bar)),
  clearCocktails: () => dispatch(clearCocktails()),
  add: item => dispatch(addToBar(item)),
  remove: item => dispatch(removeFromBar(item))
})

export default connect(mapState, mapDispatch)(Shaker)
