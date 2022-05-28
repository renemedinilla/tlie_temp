import { FC, ReactNode } from 'react'

import { AuthProvider } from './auth'

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
)

export default AppProvider