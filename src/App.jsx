import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppContext from './components/context/AppContext'
let i=0
function App() {
  const [count, setCount] = useState(0)
  // console.log("++++count+++", count);
  const context = useContext(AppContext);
  console.log(context, '++++++++', i++);

  let emptyArr=[];
  
  // console.log('+++count+++', emptyArr.length);
  const handleClick=()=>{
    setCount((count) => count + 1)
    context.state1.push(count);
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
