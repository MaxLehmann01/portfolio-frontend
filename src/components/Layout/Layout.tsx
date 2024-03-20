import { Outlet } from "react-router-dom";
import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
import LayoutBackground from "./LayoutBackground";
import { Snackbar, Alert } from "@mui/material";
import useAlert from "../../hooks/useAlert";

const Layout = () => {
  const { alert, setAlert } = useAlert();
  
  return (
    <div className="h-full w-full flex flex-col">
      <LayoutHeader />
      <div className="h-auto w-full flex-1 relative flex flex-col overflow-hidden">
        <LayoutBackground />
        <div className="h-auto w-full flex-1 z-10 py-[10%] px-[10%] overflow-y-auto">
          <Outlet />
        </div>
        <LayoutFooter />
      </div>
      { alert && (
        <Snackbar 
          open={alert !== null} 
          autoHideDuration={5000} 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
          onClose={() => setAlert(null)}
          children={<Alert severity={alert?.severity} icon={alert?.icon} children={alert?.children} />}
          />
      )}
    </div>
  )
}

export default Layout;