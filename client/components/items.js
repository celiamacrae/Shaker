import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../store/items'
import {addToBar, removeFromBar} from '../store/mybar'

class Items extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
    this.addToBar = this.addToBar.bind(this)
    this.removeFromBar = this.removeFromBar.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value
    })
    console.log('this.state', this.state.search)
  }

  render() {
    return (
      <div>
        <br />
        <h1 id="ingredz">Cocktail Ingredients</h1>

        <div id="search">
          <label htmlFor="search">
            <small>Search:</small>
          </label>
          <input
            name="search"
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </div>

        <div id="allitems">
          {this.props.items.map(item => {
            if (item.name) {
              if (
                item.name
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              ) {
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
              }
            }
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  items: state.items,
  myBar: state.myBar
})

const mapDispatch = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  add: item => dispatch(addToBar(item)),
  remove: item => dispatch(removeFromBar(item))
})

export default connect(mapState, mapDispatch)(Items)
