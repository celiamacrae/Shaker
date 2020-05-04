import React from 'react'
import {connect} from 'react-redux'
import {removeFromBar} from '../store/mybar'
import Button from '@material-ui/core/Button'

class Bar extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.removeFromBar = this.removeFromBar.bind(this)
  }

  removeFromBar(event) {
    this.props.remove(event.currentTarget.value)
  }

  render() {
    return (
      <div id="bar">
        <h1>MY BAR</h1>
        {this.props.myBar.map(item => {
          return (
            <div id="bar_item" key={item}>
              <br />
              <Button
                value={item}
                variant="contained"
                fullWidth={false}
                size="small"
                onClick={this.removeFromBar}
              >
                X
              </Button>
              <p>{item}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => ({
  myBar: state.myBar
})

const mapDispatch = dispatch => ({
  remove: item => dispatch(removeFromBar(item))
})

export default connect(mapState, mapDispatch)(Bar)
