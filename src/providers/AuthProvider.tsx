import { useEffect, useState } from "react"
import AuthContext from "../contexts/AuthContext"
import API from "../utils/API"

type tAuthProviderProps = {
  children: React.ReactNode
}

const AuthProvider = ({ children }: tAuthProviderProps) => {
  const [ signedIn, setSignedIn ] = useState<boolean>(false);
  const [ loading, setLoading ] = useState<boolean>(true);
  
  const signIn = async (password: string) => {
    try {
      await API.post('/auth/authorize', { password }, { withCredentials: true });
      setSignedIn(true);
      get();
    } catch (err) {
      setSignedIn(false);
    }
  }

  const signOut = async () => {
    try {
      await API.delete('/auth', { withCredentials: true })
    } catch (err) {
      console.log(err);
    }

    setSignedIn(false);
  }

  const get = async () => {
    try {
      await API.get('/auth', { withCredentials: true });
      setSignedIn(true);
    } catch (err) {
      setSignedIn(false);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => { 
    get();
  }, [])

  return (
    <AuthContext.Provider 
      value={{ signedIn, signIn, signOut, loading }}
      children={children}
    />
  )
}

export default AuthProvider;