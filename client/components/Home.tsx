import { Link } from "react-router-dom"
import Login from "./Login"
import Logo from "./Logo"
import Register from "./Register"

function Home() {
  return (
    <div className="text-yellow-500 pt-8 text-4xl font-bold font-sans text-center">
      <h2>Welcome to the</h2>
      <h1 className="text-7xl font-bold">Human Skills</h1>
      <h2>reflections App</h2>
      <Logo className='pt-8' />
      <div className='flex justify-center pb-8 items-center mt-4'>
      <Link to="/About">
        <Login className='mr-6' />
      </Link>
      <Link to="/Register">
        <Register />
      </Link>
      </div>
    </div>
  )
}

export default Home