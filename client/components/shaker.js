import React from 'react'
import {Items, Shake, Bar, Cocktails} from './index'

class Shaker extends React.Component {
  render() {
    return (
      <div>
        <div id="bar_cocktails">
          <Bar />
          <Shake />
          <Cocktails />
        </div>

        <br />
        <Items />
      </div>
    )
  }
}

export default Shaker
