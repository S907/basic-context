import { useContext, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';

function App() {
  

  return (
    <>
      <Header />
      {/* <SingleProduct /> */}

      <div className="flex">
        <div className="w-1/2 p-4">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum non ratione fugiat voluptatem doloribus esse laudantium tempora maiores aliquid? Culpa quam rerum odit provident sequi harum quo voluptate blanditiis assumenda!
          Id corporis voluptate inventore distinctio quibusdam, dolore dolorum consequatur quos odit quod asperiores ab dolorem maiores accusamus cum sint ullam nemo aliquam, nam voluptatibus ducimus. Ipsa officia laudantium repudiandae at?</p>
        </div>
        <div className="w-1/2 p-4">
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum non ratione fugiat voluptatem doloribus esse laudantium tempora maiores aliquid? Culpa quam rerum odit provident sequi harum quo voluptate blanditiis assumenda!
          Id corporis voluptate inventore distinctio quibusdam, dolore dolorum consequatur quos odit quod asperiores ab dolorem maiores accusamus cum sint ullam nemo aliquam, nam voluptatibus ducimus. Ipsa officia laudantium repudiandae at?
          </p>
        </div>
      </div>
      
    </>
  )
}

export default App
