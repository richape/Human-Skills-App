import { Outlet } from 'react-router-dom'
import Home from "./Home"
import Logo from './Logo'
import Login from './Login'
import Register from './Register'
import Footer from './Footer'
import TestimonialBanner from './TestimonialBanner'

function App() {
  return (
    <div className='flex flex-col min-h-screen' style={{ backgroundColor: '#40276E' }}>
      <TestimonialBanner />
      <Home />
      <Logo className='pt-7' />
      <div className='flex justify-center pb-12 items-center mt-4'>
        <Login className='mr-6' />
        <Register />
      </div>
      <div className='flex-grow'>
        <Outlet />
      </div>
        <Footer />
    </div>
  )
}

export default App