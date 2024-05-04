import { BrowserRouter } from "react-router-dom"
import Router from "./components/Router/Router"
import AlertProvider from "./providers/AlertProvider"
import LocalStorageProvider from "./providers/LocalStorageProvider"
import API from "./utils/API"
import { useCallback, useEffect } from "react"

const App = () => {

  const handleSendWebsiteVisit = useCallback(async () => {
    try {
      await API.post('/', { path: window.location.pathname });
    } catch (err) {
      console.error(err);
    }
  }, [])

  useEffect(() => {
    handleSendWebsiteVisit();
  
  }, [handleSendWebsiteVisit])
  
  return (
    <BrowserRouter>
      <LocalStorageProvider>
        <AlertProvider>
          <Router />
        </AlertProvider>
      </LocalStorageProvider>
    </BrowserRouter>
  )
}

export default App
