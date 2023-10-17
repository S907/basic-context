import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {

  return (
    <nav>
      <span>React Context</span>
      <ul className='ul-head'>
        <li>
          <Link to='/' className='li-text'>Home</Link>
        </li>
        {/* <li>
          <Link to='/product' className='li-text'>Product</Link>
        </li> */}
        <li>
        <Link to='/cart' className='li-text'>Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header