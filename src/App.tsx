import { BrowserRouter } from "react-router-dom"
import Router from "./components/Router/Router"
import AlertProvider from "./providers/AlertProvider"
import LocalStorageProvider from "./providers/LocalStorageProvider"

const App = () => {
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
