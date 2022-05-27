import { useNavigate } from 'react-router-dom'
import Button from '../../components/basic/Button'

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>HOME</h1>
      <span>Go to login page</span>
      <Button variant='primary' onClick={() => navigate('/admin/login')} >LOGIN PAGE</Button>
    </div>
  )
}

export default Home