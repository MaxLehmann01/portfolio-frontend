import { BrowserRouter } from "react-router-dom"
import Router from "./components/Router/Router"
import AlertProvider from "./providers/AlertProvider"
import LocalStorageProvider from "./providers/LocalStorageProvider"
import API from "./utils/API"
import { useCallback, useEffect } from "react"
import AuthProvider from "./providers/AuthProvider"

const App = () => {

  const handleSendWebsiteVisit = useCallback(async () => {
    try {
      await API.post('/visits', { path: window.location.pathname });
    } catch (err) {
      console.error(err);
    }
  }, [])

  useEffect(() => {
    handleSendWebsiteVisit();
  
  }, [handleSendWebsiteVisit])
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <LocalStorageProvider>
          <AlertProvider>
            <Router />
          </AlertProvider>
        </LocalStorageProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
