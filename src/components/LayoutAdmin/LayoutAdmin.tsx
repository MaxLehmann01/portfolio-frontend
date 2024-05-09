import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import ThemeAdmin from "../../themes/ThemeAdmin";
import LayoutAdminNavigation from "./LayoutAdminNavigation";

const LayoutAdmin = () => {
  return(
    <div className="h-full w-full flex">
      <LayoutAdminNavigation />
      <div className="h-full w-auto flex-1 p-[1.875rem] overflow-hidden">
        <ThemeProvider theme={ThemeAdmin}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default LayoutAdmin;