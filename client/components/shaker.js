import React from 'react'
import {connect} from 'react-redux'
import {addToBar, removeFromBar} from '../store/mybar'
import {Link} from 'react-router-dom'
import Items from './items'
import Shake from './shake'
import Cocktails from './my_cocktails'
import Button from '@material-ui/core/Button'

class Shaker extends React.Component {
  constructor() {
    super()
    this.state = {
      shake: false
    }
    this.removeFromBar = this.removeFromBar.bind(this)
    // this.urlify = this.urlify.bind(this)
  }

  removeFromBar(event) {
    this.props.remove(event.currentTarget.value)
  }

  // urlify(name) {
  //   let words = name
  //     .toLowerCase()
  //     .split(' ')
  //     .join('_')
  //   return words
  // }

  render() {
    console.log('here', this.props)
    console.log('HERE>>>>', this.state)
    return (
      <div>
        <div id="bar_cocktails">
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

          <Shake />
          <Cocktails />
        </div>

        <br />

        <Items />
      </div>
    )
  }
}

const mapState = state => ({
  cocktails: state.cocktails,
  myBar: state.myBar
})

const mapDispatch = dispatch => ({
  add: item => dispatch(addToBar(item)),
  remove: item => dispatch(removeFromBar(item))
})

export default connect(mapState, mapDispatch)(Shaker)
