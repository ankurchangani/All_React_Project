import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoWeatherForm from './components/TodoWeatherForm/TodoWeatherForm'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ViewData from './components/ViewData/ViewData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <TodoWeatherForm />
      <ViewData/>
    </>
  )
}

export default App
