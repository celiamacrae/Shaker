import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../store/items'

class Items extends React.Component {
  constructor() {
    super()
    this.state = {
      myBar: ['Ice']
    }
    this.addToBar = this.addToBar.bind(this)
    this.removeFromBar = this.removeFromBar.bind(this)
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

  render() {
    // console.log(this.props.items)
    return (
      <div>
        <div>
          <h1>MY BAR:</h1>
          <ul>
            {this.state.myBar.map(item => {
              return <li>{item}</li>
            })}
          </ul>
        </div>

        <div>
          <h1>ITEMS:</h1>
          <ul>
            {this.props.items.map(item => {
              return (
                <div key={item.id}>
                  <li>{item.name}</li>
                  <button
                    value={item.name}
                    type="submit"
                    key={item.id}
                    onClick={this.addToBar}
                  >
                    ADD TO BAR
                  </button>
                  <button
                    value={item.name}
                    type="submit"
                    key={item.id}
                    onClick={this.removeFromBar}
                  >
                    REMOVE FROM BAR
                  </button>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  items: state.items
})

const mapDispatch = dispatch => ({
  fetchItems: () => dispatch(fetchItems())
})

export default connect(mapState, mapDispatch)(Items)
