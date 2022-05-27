import { ReactElement, FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

interface PrivateRouteProps {
  component: ReactElement
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component }) => {
  const { isLogged } = useAuth()

  return isLogged ? component : <Navigate to="/admin/login" />
}

export default PrivateRoute