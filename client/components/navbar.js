import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div id="navbar">
    <h1 id="site_title">SHAKER</h1>

    <nav>
      <div id="nav">
        {/* The navbar will show these links before you log in */}
        <Link to="/home">Home</Link>
        <Link to="/items">Items</Link>
        <Link to="/recipes">Recipes</Link>
      </div>
    </nav>

    <hr />
  </div>
)

export default Navbar
