import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './test.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>

      {/* Navigation Link */}
      <nav>
        <Link to="/test">Go to Test Page</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        }/>
        <Route path="/test" element={<Test />} />
      </Routes>

      <p className="read-the-docs">
        Click on the Vite and{' '}
        <Link to="/test" style={{ color: 'inherit', textDecoration: 'underline' }}>
          React
        </Link>{' '}
        logos toHHHH hehehehlearn more
      </p>
    </>
  )
}

export default App

