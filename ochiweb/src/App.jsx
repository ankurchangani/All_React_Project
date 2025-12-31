import React from 'react'
import Navbar from './components/header/Navbar'
import Landing from './pages/Landing'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
        <Navbar/>
        <Landing/>
    </div>
  )
}

export default App
