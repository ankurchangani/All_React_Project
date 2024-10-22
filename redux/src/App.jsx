
import './App.css'
import store from './store'
import { Provider } from 'react-redux'  
import { Basci  } from './Components/basci/Basci'
import Counter from './Components/Counter/Counter'


function App() {
  

  return (
    <>
    <Provider store={store}>
    <Basci/>
    <Counter/>
  </Provider>
    </>
  )
}

export default App
