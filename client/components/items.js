import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../store/items'
import {shake} from '../store/cocktails'
import {addToBar, removeFromBar} from '../store/mybar'
import {Link} from 'react-router-dom'

class Items extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.addToBar = this.addToBar.bind(this)
    this.removeFromBar = this.removeFromBar.bind(this)
    this.shakeItUp = this.shakeItUp.bind(this)
    this.urlify = this.urlify.bind(this)
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
    // console.log("SHAKER", this.state.myBar)
    let bar = this.props.myBar
    this.props.shake(bar)
  }

  render() {
    console.log('here', this.props)
    return (
      <div>
        <div id="bar_cocktails">
          <div id="bar">
            <h1>MY BAR:</h1>
            <ul>
              {this.props.myBar.map(item => {
                return <li key={item}>{item}</li>
              })}
            </ul>
            <button type="submit" onClick={this.shakeItUp}>
              SHAKE IT UP
            </button>
          </div>

          {this.props.cocktails ? (
            <div>
              <h1>Cocktails:</h1>
              {this.props.cocktails.map(cocktail => {
                return (
                  <div key={cocktail}>
                    <Link to={`/recipes/${this.urlify(cocktail)}`}>
                      {cocktail}
                    </Link>
                  </div>
                )
              })}
            </div>
          ) : (
            <div />
          )}
        </div>

        <br />

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
                      // key={item.id}
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
  add: item => dispatch(addToBar(item)),
  remove: item => dispatch(removeFromBar(item))
})

export default connect(mapState, mapDispatch)(Items)
