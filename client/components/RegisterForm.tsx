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
    <div className="text-yellow-500 pt-4 p-2 flex flex-col items-center">
      <h2 className="text-6xl font-bold">Register</h2>
      <p className="text-3xl">
        Please fill in your details below to register your account
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-col p-2 text-2xl">
          <label htmlFor="fullname" className="mb-2">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="p-2 border rounded-lg"
          />
        </div>
        <div className="flex flex-col p-2 text-2xl">
          <label htmlFor="email" className="mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded-lg"
          />
        </div>
        <div className="flex flex-col p-2 text-2xl">
          <label htmlFor="cohort" className="mb-2">Cohort:</label>
          <input
            type="text"
            id="cohort"
            name="cohort"
            value={formData.cohort}
            onChange={handleChange}
            className="p-2 border rounded-lg"
          />
        </div>
        <div className="flex flex-col p-2 text-2xl">
          <label htmlFor="password" className="mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 border rounded-lg"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="py-2 px-5 rounded-md text-2xl font-bold bg-opacity-75 cursor-pointer"
            style={{ backgroundColor: '#7E51B2' }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;