import React from 'react'
import {connect} from 'react-redux'
import {removeFromBar} from '../store/mybar'
import ClearIcon from '@material-ui/icons/Clear'
import Button from '@material-ui/core/Button'
import {Grid} from '@material-ui/core'

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
      <div className="here">
        <Grid container spacing={0} direction="column" flexWrap="wrap">
          <h1>MY BAR</h1>
          {this.props.myBar.map(item => {
            return (
              <div id="bar_item" key={item}>
                <Grid item>
                  <Grid container direction="row" alignItems="center">
                    <Button
                      value={item}
                      fullWidth={false}
                      size="small"
                      onClick={this.removeFromBar}
                    >
                      <ClearIcon onClick={this.removeFromBar} />
                    </Button>

                    <p>{item}</p>
                  </Grid>
                </Grid>
              </div>
            )
          })}
        </Grid>
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
