import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/Home'
import Login from '../pages/Admin/Login'
import Portal from '../pages/Admin/Portal'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin/login' element={<Login/>} />
      <Route path='/admin/portal' element={<PrivateRoute component={<Portal/>} />} />
    </Routes>
  )
}

export default AppRoutes