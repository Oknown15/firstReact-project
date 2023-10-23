import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greet'
import Welocme from './components/Welocme'
import Message from './components/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Greet name="Yo!"></Greet> */}
     {/* <Welocme /> */}
     <Message />
    </>
  )
}

export default App
