// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/navbar"
import Menubar from "./components/Menubar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <h1 className="text-3xl font-bold underline">
    //   Hai Love!!
    // </h1>
    <div className= 'bg-gray-100 min-j-scream'>
          <Navbar />
          <Menubar />
    </div>
  )
}

export default App
