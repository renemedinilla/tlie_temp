import { useNavigate } from 'react-router-dom'
import Button from '../../components/basic/Button'

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>HOME</h1>
      <br /><br />
      <Button variant='primary' onClick={() => navigate('/new')} >NEW APPLICATION</Button><br /><br />
      <Button variant='secondary' onClick={() => navigate('/renewal')} >RENEWAL</Button><br /><br />
      <Button variant='primary' onClick={() => navigate('/admin')} >LOGIN AS ADMIN</Button><br /><br />
      <Button variant='secondary' onClick={() => navigate('/customer')} >LOGIN AS CUSTOMER</Button>
    </div>
  )
}

export default Home