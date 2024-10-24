import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Rename from './pages/Rename'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <Router>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* its dynamic routing */}
        <Route path='/rename/:id' element={<Rename/>}/>
      </Routes>
     
    </Router>
    </Provider>
     
    </>
  )
}

export default App
