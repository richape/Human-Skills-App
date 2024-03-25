// // Need to work on Auth0 form and routes
// import { useEffect } from 'react'
// import { useAuth0 } from '@auth0/auth0-react'
// import { useNavigate } from 'react-router-dom'

// export default function Register() {
//   const { user, getAccessTokenSilently } = useAuth0()
//   const userDb = useUser()
//   const navigate = useNavigate()
//   const initialFormData = {
//     Full_name: '',
//     Email: '',
//     Cohort: '',
//     Password: '',
//     'Confirm Password': '',
//   }

//   const [formData, setFormData] = useState(initialFormData)

//   useEffect(() => {
//     if (userDb.data) navigate('/')
//   }, [userDb.data, navigate])
// }

function Register() {
    return (
      <>
        <div
          className="rounded-md drop-shadow-xl"
          // p-3.5
          style={{ backgroundColor: '#7E51B2' }}
        >
          <button className="text-yellow-500 py-2 px-5 rounded-lg text-2xl font-bold bg-opacity-75 cursor-pointer">
            sign up
          </button>
        </div>
      </>
    )
  }

  export default Register