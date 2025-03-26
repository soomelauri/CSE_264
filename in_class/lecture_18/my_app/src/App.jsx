import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import User from './pages/User'
import NoMatch from './pages/NoMatch'

// layout is our parent route for everything, therefore every child gets the layout

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/user' element={<User />}/>
          <Route path='*' element={<NoMatch />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
