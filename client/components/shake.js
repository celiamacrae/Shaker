import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import {shake, clearCocktails} from '../store/cocktails'
import {Grid} from '@material-ui/core'

class Shake extends React.Component {
  constructor() {
    super()
    this.state = {
      shake: false
    }
    this.shake2 = this.shake2.bind(this)
    this.shakeItUp = this.shakeItUp.bind(this)
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
      <div className="here">
        <Grid container justify="center">
          {this.state.shake ? (
            <div id="dawg">
              <br />
              <img
                id="dog"
                src="https://media2.giphy.com/media/3o85xomqdEz6L0wS8o/200.gif"
              />
              <br />
              {this.props.myBar.length > 0 ? (
                // <Button id="shake" type="submit" onClick={this.shakeItUp}>
                <Button
                  size="large"
                  variant="outlined"
                  onClick={this.shakeItUp}
                >
                  SHAKE IT UP
                </Button>
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
                <Button
                  size="large"
                  variant="outlined"
                  onClick={this.shakeItUp}
                >
                  SHAKE IT UP
                </Button>
              ) : (
                <p />
              )}
            </div>
          )}
        </Grid>
      </div>
    )
  }
}

const mapState = state => ({
  myBar: state.myBar
})

const mapDispatch = dispatch => ({
  shake: bar => dispatch(shake(bar)),
  clearCocktails: () => dispatch(clearCocktails())
})

export default connect(mapState, mapDispatch)(Shake)
