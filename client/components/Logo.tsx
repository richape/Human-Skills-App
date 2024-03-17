interface LogoProps {
  className?: string
}

function Logo({ className }: LogoProps) {
  return (
    <>
      <div className={`flex items-center justify-center p-5 ${className}`}>
        <img
          src="./images/logo.png"
          alt="Dev Academy Logo"
          style={{ width: '20%' }}
        ></img>
      </div>
    </>
  )
}

export default Logo