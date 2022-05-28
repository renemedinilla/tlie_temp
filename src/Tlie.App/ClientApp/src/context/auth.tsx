import { createContext, useContext, useState, useCallback, FC, ReactNode, useMemo } from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  isLogged: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState)

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const authPromise = new Promise<AuthState>((resolve, reject) => {
      if(email === 'test@test.co' && password === 't123') {
        resolve({
          user: {
            id: 1,
            name: 'Renato Takao',
            email: 'test@test.co'
          },
          token: '1122abc'
        })
      } else reject({})
    })

    authPromise
      .then(result => setAuthData({ user: result.user, token: result.token }))
      .catch(() => setAuthData({} as AuthState))
  }, [])

  const signOut = useCallback(() => setAuthData({} as AuthState), [])

  const isLogged = useMemo(() => {
    if(!!authData && !!authData.token) return true

    return false
  }, [authData])

  return (
    <AuthContext.Provider
      value={{ user: authData.user, signIn, signOut, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if(!context) throw new Error('useAuth must be used within an AuthProvider!')

  return context
}