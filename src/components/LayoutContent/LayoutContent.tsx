import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import LayoutContentBackground from "./LayoutContentBackground";
import LayoutContentFooter from "./LayoutContentFooter";
import LayoutContentHeader from "./LayoutContentHeader";
import ThemeContent from "../../themes/ThemeContent";

const LayoutContent = () => {
  return (
    <ThemeProvider theme={ThemeContent}>
      <CssBaseline />
      <div className="h-full w-full flex flex-col">
        <LayoutContentHeader />
        <div className="h-auto w-full flex-1 relative flex flex-col overflow-hidden">
          <LayoutContentBackground />
          <div className="h-full w-full flex-1 z-10 overflow-y-auto">
            <Outlet />
          </div>
          <LayoutContentFooter />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default LayoutContent;