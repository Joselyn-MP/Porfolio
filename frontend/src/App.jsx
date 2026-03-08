import { useState } from 'react'

import miFoto from './assets/joselyn.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="layout">
        <div className="content">
          <h1>Joselyn Montero Perez</h1>
          <h3>Desarrolladora de Software</h3>
          <p>
              Apasionada por la tecnología y el desarrollo de software.
          </p>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
          
        </div>
        <div className="sphere-container">
          <img src={miFoto} alt="Joselyn" className="sphere" />
        </div>
      </div>
    </>
  )
}

export default App
