import React from 'react'
import {connect} from 'react-redux'
import {fetchItems} from '../store/items'

class Items extends React.Component {
  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    console.log(this.props.items)
    return (
      <div>
        <h1>ITEMS:</h1>
        <ul>
          {this.props.items.map(item => {
            return <li key={item.id}>{item.name}</li>
          })}
        </ul>
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
