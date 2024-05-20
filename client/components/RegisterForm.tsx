import { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    cohort: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log('Form Data Submitted: ', formData);
  };

  return (
    <div className="text-yellow-500 pt-8 text-center">
      <h2 className="text-7xl font-bold ">Register</h2>
      <p className="p-4 text-3xl">
            Please fill in your details below to register your account
            </p>
    <form onSubmit={handleSubmit}>
      <div className='p-4 text-3xl'>
        <label htmlFor="fullname">Full Name: </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
      </div>
      <div className='p-4 text-3xl'>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='p-4 text-3xl'>
        <label htmlFor="cohort">Cohort: </label>
        <input
          type="text"
          id="cohort"
          name="cohort"
          value={formData.cohort}
          onChange={handleChange}
        />
      </div>
      <div className='p-4 text-3xl'>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="py-2 px-5 rounded-lg text-2xl font-bold bg-opacity-75 cursor-pointer">
          login
        </button>
    </form>
    </div>
  )
}

export default RegisterForm;