import React from 'react'
import Header from '../Header';
import './product.css';

const SingleProduct = ({prod, cart, setCart}) => {
  
  return (
    <>
    <div className="products">
      <img src={prod?.image} alt={prod?.name} />
      <div className="prodDesc">
        <span>{prod?.name}</span>
        <span>{prod?.price}</span>
      </div>
      {cart?.includes(prod)? 
      (
         <button className='button' onClick={()=>setCart(cart?.filter((c)=> c.id !== prod.id))}>Remove from cart</button>
      )
      :
      (<button className='button' onClick={()=>setCart([...cart, prod])}>Add to cart</button>)}
    </div>
    </>
  )
}

export default SingleProduct