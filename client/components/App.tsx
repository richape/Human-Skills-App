import { Outlet } from 'react-router-dom'
import Footer from './Footer'
// import TestimonialBanner from './TestimonialBanner'

function App() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden' style={{ backgroundColor: '#40276E' }}>
      <div style={{ backgroundColor: '#60C6CB' }}>
        {/* <TestimonialBanner /> */}
      </div>
      <div className='flex-grow'>
        <Outlet />
      </div>
        <Footer />
    </div>
  )
}

export default App