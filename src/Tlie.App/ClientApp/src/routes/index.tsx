import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

// GENERAL
import Home from '../pages/Home'

// NEW APPLICATION
import InsuranceType from '../pages/NewApplications/InsuranceType'

// RENEWAL
import BeginRenewal from '../pages/Renewals/BeginRenewal'

// ADMIN PORTAL
import AdminLogin from '../pages/AdminPortal/Login'
import AdminPortal from '../pages/AdminPortal/Portal'

// CUSTOMER PORTAL
import CustomerLogin from '../pages/CustomerPortal/Login'
import CustomerPortal from '../pages/CustomerPortal/Portal'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/new' element={<InsuranceType/>} />

      <Route path='/renewal' element={<BeginRenewal/>} />

      <Route path='/admin' element={<AdminLogin/>} />
      <Route path='/admin/portal' element={<PrivateRoute component={<AdminPortal/>} redirectTo="/admin" />} />

      <Route path='/customer' element={<CustomerLogin/>} />
      <Route path='/customer/portal' element={<PrivateRoute component={<CustomerPortal/>} redirectTo="/customer" />} />
    </Routes>
  )
}

export default AppRoutes