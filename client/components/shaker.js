import React from 'react'
import {Items, Shake, Bar, Cocktails} from './index'
import {Grid} from '@material-ui/core'

class Shaker extends React.Component {
  render() {
    return (
      <div>
        <div id="bar_cocktails">
          <Grid container justify="space-between">
            <Bar />
            <Shake />
            <Cocktails />
          </Grid>
        </div>

        <br />
        <Items />
      </div>
    )
  }
}

export default Shaker
