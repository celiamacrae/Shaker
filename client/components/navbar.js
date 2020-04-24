import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>SHAKER</h1>
    <nav>
      <div>
        {/* The navbar will show these links before you log in */}
        <Link to="/home">Home</Link>
        <Link to="/items">Items</Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar
