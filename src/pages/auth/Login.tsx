import { useLocation, useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const fromPage = location.state?.from?.pathname || '/'

  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}