import { Routes, Route } from 'react-router-dom'
import AppRoute from './AppRoute'

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

      <Route path='/new' element={<AppRoute component={<InsuranceType/>} mainLayout='application'/>} />

      <Route path='/renewal' element={<AppRoute component={<BeginRenewal/>} mainLayout='application'/>} />

      <Route path='/admin' element={<AdminLogin/>} />
      <Route path='/admin/portal' element={<AppRoute component={<AdminPortal/>} redirectTo="/admin" isPrivate mainLayout='portal'/>} />

      <Route path='/customer' element={<CustomerLogin/>} />
      <Route path='/customer/portal' element={<AppRoute component={<CustomerPortal/>} redirectTo="/customer" isPrivate mainLayout='portal'/>} />
    </Routes>
  )
}

export default AppRoutes