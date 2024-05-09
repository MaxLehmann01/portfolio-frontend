import { createContext } from "react";

type tAuthContext = {
  signedIn: boolean,
  signIn: (password: string) => Promise<void>,
  signOut: () => Promise<void>,
  loading: boolean
}

const AuthContext = createContext<tAuthContext | undefined>(undefined);

export default AuthContext;