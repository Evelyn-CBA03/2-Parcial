import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='contenedor'>
      <span><img className='topic' src="./src/components/Ellipse 1.png" alt="" /></span>
      <span><img className='frame' src="./src/components/Frame 266.png" alt="" /></span>
        
    </div>
    </>
  )
}

export default App
