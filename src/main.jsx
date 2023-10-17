import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Header from './components/Header.jsx';
import GlobalState from './components/context/GlobalState.jsx';
import Cart from './components/product/Cart.jsx'
import MainCont from './components/MainCont.jsx';
// import SingleProduct from './components/product/SingleProduct.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/main",
    element: <MainCont />
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalState>
      <RouterProvider router={router} />
    </GlobalState>
  </React.StrictMode>,
)
