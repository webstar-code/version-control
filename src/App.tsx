import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='flex justify-center items-center'>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <img src="/typescript.svg" className="logo react" alt="TypeScript logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img src="/tailwindcss.svg" className="logo" alt="TailwindCSS logo" />
        </a>
        <a href="https://eslint.org/" target="_blank" rel="noreferrer">
          <img src="/eslint.svg" className="logo" alt="ESLint logo" />
        </a>
      </div>
      <h1>Vite + React 18 + TS + TailwindCSS + ESLint @v1</h1>
    </div>
  )
}

export default App
