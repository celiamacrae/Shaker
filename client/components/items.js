import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../store/items'
import {shake, clearCocktails} from '../store/cocktails'
import {addToBar, removeFromBar} from '../store/mybar'
import {Link} from 'react-router-dom'

class Items extends React.Component {
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
        <h1 id="ingredz">Cocktail Ingredients</h1>
        <div id="allitems">
          {this.props.items.map(item => {
            return (
              <div className={`item ${item.category}`} key={item.id}>
                <p className="itemName">{item.name}</p>

                <div id="itembuttons">
                  <button
                    className="itembutton"
                    value={item.name}
                    type="submit"
                    onClick={this.addToBar}
                  >
                    ADD TO BAR
                  </button>
                  <button
                    className="itembutton"
                    value={item.name}
                    type="submit"
                    onClick={this.removeFromBar}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            )
          })}
        </div>
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

export default connect(mapState, mapDispatch)(Items)
