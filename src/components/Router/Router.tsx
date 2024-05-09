import { Alert, Snackbar } from "@mui/material";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";
import AdminDashboard from "../../pages/Admin/AdminDashboard";
import AdminProjects from "../../pages/Admin/AdminProjects";
import AdminSignIn from "../../pages/Admin/AdminSignIn";
import AdminTechs from "../../pages/Admin/AdminTechs";
import ContentAbout from "../../pages/Content/ContentAbout";
import ContentContact from "../../pages/Content/ContentContact";
import ContentHome from "../../pages/Content/ContentHome";
import ContentProjects from "../../pages/Content/ContentProjects";
import ContentToolbox from "../../pages/Content/ContentToolbox";
import NotFound from "../../pages/Error/NotFound";
import LayoutAdmin from "../LayoutAdmin/LayoutAdmin";
import LayoutContent from "../LayoutContent/LayoutContent";

const Router = () => {
  const { signedIn, loading } = useAuth();
  const { alert, setAlert } = useAlert();

  if(loading) return <></>;

  return (
    <>
      <Routes>
        <Route element={!signedIn ? <Outlet /> : <Navigate to="/admin/" />}>
          <Route path="/admin/signin" element={<AdminSignIn />} />
        </Route>
        
        <Route element={signedIn ? <LayoutAdmin /> : <Navigate to="/admin/signin" />}>
          <Route path="/admin/" element={<AdminDashboard />} />
          <Route path="/admin/projects" element={<AdminProjects />} />
          <Route path="/admin/techs" element={<AdminTechs />} />
        </Route>

        <Route element={<LayoutContent />}>
          <Route path="/" element={<ContentHome />} />
          <Route path="/projects" element={<ContentProjects />} />
          <Route path="/toolbox" element={<ContentToolbox />} />
          <Route path="/about" element={<ContentAbout />} />
          <Route path="/contact" element={<ContentContact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      { alert && (
        <Snackbar 
          open={alert !== null} 
          autoHideDuration={5000} 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
          onClose={() => setAlert(null)}
          children={<Alert severity={alert?.severity} icon={alert?.icon} children={alert?.children} />}
          />
      )}
    </>
  )
}

export default Router;