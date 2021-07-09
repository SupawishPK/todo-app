import React from 'react'
import axios from 'axios'

interface LoginProps {
  renderSignup: () => void
}

const Login = ({ renderSignup }: LoginProps) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onSubmitLogin = () => {
    console.log(username, password)
    axios
      .post('http://localhost:5000/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        // successful, save the token
        if (res.status === 200) {
          console.log(res.data)
          const token = res.data.token
          localStorage.setItem('token', token)

          window.location.href = '/dashboard'
        }
        if (res.status === 401) {
          console.log(res.data.error)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div style={{ height: '300px' }}>
      <h1 className="text-center text-green-400 font-bold">Login</h1>
      <div className="mb-4">
        <label>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded-md"
          type="text"
          placeholder="username"
        />
      </div>
      <div className="mb-4">
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-400 rounded-md"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>
            No account?{' '}
            <span
              className="text-green-400 cursor-pointer"
              onClick={() => renderSignup()}
            >
              Signup
            </span>
          </p>
        </div>
        <button
          className="rounded-lg px-6 py-3 font-bold bg-green-400 text-white"
          onClick={() => onSubmitLogin()}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
