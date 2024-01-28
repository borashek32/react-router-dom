import { ReactElement } from "react"
import { Navigate, useLocation } from "react-router-dom"

type Props = {
  children: ReactElement
}

export const WithAuthRedirect = ({ children }: Props) => {
  const location = useLocation()
  const isAuth = false

  if (!isAuth) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return (
    <div></div>
  )
}