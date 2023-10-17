import { useContext, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import SingleProduct from './components/product/SingleProduct';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [productId, setProId] = useState([]);
  const [getId, setId] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3001/data').then((res) => {
      // console.log(res);
      const data = res.json();
      return data;
    }).then(data => {
      console.log(data);
      setData(data);
      setLoading(false);
    }).catch(err => {
      console.log(err);
      setLoading(false);
    });
  }, [])

  const handleClick = () => {
    const variantId = [];
    const productId = [];

    // console.log('data+++', data);
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const variantArray = data[i].variant;
        // console.log('+++var+++', variantArray);
        for (let j = 0; j < variantArray.length; j++) {
          variantId.push(variantArray[j].id);
          productId.push(variantArray[j].product_id);
        }
      }
    }
    // console.log('+++Variant+++',variantId, productId);

    setProId(productId);
    setId(variantId);
  }

  console.log(productId, getId);

  return (
    <>
      <Header />
      {/* <SingleProduct /> */}
      <div>
        <p>{JSON.stringify(productId)}</p>
        <p>{JSON.stringify(getId)}</p>
      </div>
      <button onClick={handleClick}>Get Data</button>
    </>
  )
}

export default App
