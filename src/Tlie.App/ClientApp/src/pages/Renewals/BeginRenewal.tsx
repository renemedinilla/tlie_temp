import { useNavigate } from 'react-router-dom'
import Button from '../../components/basic/Button'

const BeginRenewal = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>BeginRenewal</h1>
      <span>Go to login page</span>
      <Button variant='primary' onClick={() => navigate('/admin')} >LOGIN AS ADMIN</Button>
      <Button variant='secondary' onClick={() => navigate('/customer')} >LOGIN AS CUSTOMER</Button>
      <Button variant='primary' onClick={() => navigate('/new')} >NEW APPLICATION</Button>
      <Button variant='secondary' onClick={() => navigate('/renewal')} >RENEWAL</Button>
    </div>
  )
}

export default BeginRenewal