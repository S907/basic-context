import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import AppContext from './context/AppContext';
import {faker} from '@faker-js/faker';
import SingleProduct from './product/SingleProduct';

let i=0;
faker.seed(100);
const MainCont = () => {
    const context = useContext(AppContext);
    const productsArray = [...Array(20)].map(()=>({
      id:faker.string.uuid(),
      name:faker.commerce.productName(),
      price:faker.commerce.price(),
      image:faker.image.avatar()
    }));

    useEffect(()=>{

    },[])
    const [cart, setCart] = useState([]);
    const [products]=useState(productsArray);
  
    console.log('++++pro++++', productsArray);
    console.log('++cart++', cart);
    
  return (
    <>
    <div className='productContainer'>
          {
            products.map((item)=>(
                <SingleProduct prod={item} cart={cart} setCart={setCart} />
              ))
          }
      </div>
    
    </>
  )
}

export default MainCont