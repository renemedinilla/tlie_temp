import { ReactElement, FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth'

interface PrivateRouteProps {
  component: ReactElement;
  redirectTo?: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component, redirectTo }) => {
  const { isLogged } = useAuth()

  return isLogged ? component : <Navigate to={redirectTo ?? '/'} />
}

export default PrivateRoute