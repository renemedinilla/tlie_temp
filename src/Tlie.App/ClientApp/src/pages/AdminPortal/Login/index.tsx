import Button from '../../../components/basic/Button'
import { useAuth } from '../../../context/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const log = ({ email, password }: { email: string, password: string }) => {
    signIn({ email, password })
    navigate('/admin/portal')
  }
  
  return (
    <div>
      <h1>LOGIN</h1>
      <Button variant='secondary' onClick={() => log({ email: '', password: '' })} >Login Wrong</Button>
      <Button variant='primary' onClick={() => log({ email: 'test@test.co', password: 't123' })} >Login Right</Button>
    </div>
  )
}

export default Login