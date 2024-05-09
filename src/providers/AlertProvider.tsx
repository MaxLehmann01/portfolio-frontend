import { useState } from "react"
import { tAlert } from "../types/tAlert"
import AlertContext from "../contexts/AlertContext"

type tAlertProviderProps = {
  children: React.ReactNode
}

const AlertProvider = ({ children }: tAlertProviderProps) => {
  const [ alert, setAlert ] = useState<tAlert | null>(null);

  return (
    <AlertContext.Provider 
      value={{ alert, setAlert }}
      children={children}
    />
  )
}

export default AlertProvider