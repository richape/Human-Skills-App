import { Link } from "react-router-dom";

export default function HomeButton() {
  return(
      <Link to='/' className="p-8 flex justify-start">
        <img src="/images/logo.png" alt="Dev Academy Logo" className="w-20" />
      </Link>
  )
}