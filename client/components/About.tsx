import { Link } from "react-router-dom"

function About() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Link to='/' className="p-10">
          <img src="/images/logo.png" alt="Dev Academy Logo" style={{ width: '10%' }} />
        </Link>
        <div className="flex text-center">
          <h1 className="text-yellow-500 text-5xl font-bold font-sans">
            Welcome to Bootcamp
          </h1>
        </div>
      </div>
        <div>
          <div className="text-yellow-500 p-10 text-3xl font-sans">
            <p className="p-6 px-10">
            This is your friendly Human Skills reflections App, it has been created
            to make capturing your reflections during Bootcamp more easily to help
            complete your Human Skills Trellos (Trellos will be introduced to you
            during Week 1).
            </p>
            <p className="p-6 px-10">
            Please be sure to read each question thoroughly. If you have any
            questions please do not hesitate to contact your Human Skills
            Facilitator.
            </p>
            <p className="p-6 px-10">
            If you do submit anything into your Trello cards for your facilitator to
            mark, please tag them as well.
            </p>
          </div>
        </div>
    </>
  )
}

export default About