import { Outlet } from 'react-router-dom'
import Home from "./Home"
import Logo from './Logo'
import Login from './Login'
import Register from './Register'
import Footer from './Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#40276E' }}>
      <Home />
      <Logo className="pt-7" />
      <div className="flex justify-center items-center mt-4">
        <Login className="mr-5" />
        <Register />
      </div>
      <Footer />
      <Outlet />
    </div>
  )
}

export default App