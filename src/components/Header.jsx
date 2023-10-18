import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { BsCartCheck } from 'react-icons/Bs';

const Header = () => {

  return (
    <nav className='h-12'>
      <div style={{flex:2,display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
      <span>React Context</span>
      <form action="" style={{ alignItems:'center'}}>
        <input type="search" name="" id="" value={''} style={{width:'100%', height:'35px', borderRadius:'.5rem'}} />
      </form>
      </div>
      <BsCartCheck style={{marginLeft:'20px', fontSize:'1.5rem'}} />
      <span></span>
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