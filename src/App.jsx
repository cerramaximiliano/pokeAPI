import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div>

      </div>
      <h1>Poke API</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Home
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App
