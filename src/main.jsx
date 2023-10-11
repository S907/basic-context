import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './components/Details.jsx';
import GlobalState from './components/context/GlobalState.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/details",
    element:<Details />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalState>
<RouterProvider router={router} /> 
</GlobalState> 
</React.StrictMode>,
)
