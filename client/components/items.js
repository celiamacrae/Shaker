import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../store/items'
import {shake} from '../store/cocktails'

class Items extends React.Component {
  constructor() {
    super()
    this.state = {
      myBar: ['Ice']
    }
    this.addToBar = this.addToBar.bind(this)
    this.removeFromBar = this.removeFromBar.bind(this)
    this.shakeItUp = this.shakeItUp.bind(this)
  }
  componentDidMount() {
    this.props.fetchItems()
  }

  addToBar(event) {
    if (!this.state.myBar.includes(event.target.value)) {
      this.setState({
        myBar: [...this.state.myBar, event.target.value]
      })
    }
  }

  removeFromBar(event) {
    this.setState({
      myBar: this.state.myBar.filter(item => item !== event.target.value)
    })
  }

  shakeItUp() {
    // console.log("SHAKER", this.state.myBar)
    let bar = this.state.myBar
    this.props.shake(bar)
  }

  render() {
    console.log('here', this.props)
    return (
      <div>
        <div>
          <h1>MY BAR:</h1>
          <ul>
            {this.state.myBar.map(item => {
              return <li key={item}>{item}</li>
            })}
          </ul>
          <button type="submit" onClick={this.shakeItUp}>
            SHAKE
          </button>
        </div>

        {this.props.cocktails ? (
          <div>
            <h1>Cocktails:</h1>
            {this.props.cocktails.map(cocktail => {
              return <li key="cocktail">{cocktail}</li>
            })}
          </div>
        ) : (
          <div />
        )}

        <div>
          <h1>ITEMS:</h1>
          <div id="allitems">
            {this.props.items.map(item => {
              return (
                <div className="item" key={item.id}>
                  <p className="itemName">{item.name}</p>
                  <button
                    value={item.name}
                    type="submit"
                    // key={item.id}
                    onClick={this.addToBar}
                  >
                    ADD TO BAR
                  </button>
                  <button
                    value={item.name}
                    type="submit"
                    onClick={this.removeFromBar}
                  >
                    REMOVE FROM BAR
                  </button>
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
  cocktials: state.cocktails
})

const mapDispatch = dispatch => ({
  fetchItems: () => dispatch(fetchItems()),
  shake: bar => dispatch(shake(bar))
})

export default connect(mapState, mapDispatch)(Items)
