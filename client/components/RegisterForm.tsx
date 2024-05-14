import { useState } from "react"

export default function RegisterForm() {
  const [fullname , setFullname] = useState('')
  const [email , setEmail] = useState('')
  const [cohort , setCohort] = useState('')
  const [password , setPassword] = useState('')

  return (
    <>
    <label>
      Full Name:
      <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
    </label>
    <label>
      Email:
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </label>
    <label>
      Cohort:
      <input type="text" value={cohort} onChange={(e) => setCohort(e.target.value)}/>
    </label>
    <label>
      Password:
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </label>
    <button type="submit">Submit</button>
    </>
  )
}