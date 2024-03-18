interface LoginProps {
  className?: string
}

function Login({ className }: LoginProps) {
  return (
    <div className={className}>
      <div
        className="rounded-md drop-shadow-xl"
        // p-3.5
        style={{ backgroundColor: '#7E51B2' }}
      >
        <button className="text-yellow-500 py-2 px-5 rounded-lg text-xl font-bold bg-opacity-75 cursor-pointer">
          login
        </button>
      </div>
    </div>
  )
}

export default Login