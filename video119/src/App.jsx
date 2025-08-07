import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <form action="">
          <input type="text" name="username" id="" />
          <input type="submit" value="Submit" />

        </form>
      </div>
    </>
  )
}

export default App
