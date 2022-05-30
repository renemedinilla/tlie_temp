import { ReactElement, FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth'
import ApplicationMainLayout from '../components/ApplicationMainLayout'

interface AppRouteProps {
  component: ReactElement;
  redirectTo?: string;
  mainLayout?: 'application' | 'portal'
  isPrivate?: boolean;
}

const AppRoute: FC<AppRouteProps> = ({ component, redirectTo, mainLayout, isPrivate }) => {
  const { isLogged } = useAuth()

  const ComponentWithMainLayout = () => {
    switch(mainLayout) {
      case 'application':
        return <ApplicationMainLayout>{component}</ApplicationMainLayout>
      case 'portal':
        return component
      default:
        return component
    }
  }

  return (!isLogged && isPrivate) ? <Navigate to={redirectTo ?? '/'} /> : <ComponentWithMainLayout />
}

export default AppRoute