import { useAuth } from '../../../context/auth'
import Button from '../../../components/basic/Button'

const Portal = () => {
  const { signOut, user } = useAuth()

  return (
    <div>
      <h1>PORTAL</h1>
      <p>Name: {user.name}, Email: {user.email}</p>
      <Button variant='primary' onClick={() => signOut()} >SIGN OUT</Button>
    </div>
  )
}

export default Portal