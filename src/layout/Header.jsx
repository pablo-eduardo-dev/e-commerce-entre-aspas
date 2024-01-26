import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>E-commerce</h1>
      <nav>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/products'>PRODUCTS</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
