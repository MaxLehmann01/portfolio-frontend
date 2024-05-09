import { Button, Divider, Typography } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LayoutAdminNavigation = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="h-full w-[200px] flex flex-col p-2 gap-2 text-center border-r border-r-[#f3f5f9] shadow-md bg-white">
      <Typography variant="h5">Administration</Typography>
      <Divider />
      <div className="h-auto w-full flex-1 flex flex-col gap-2">
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={() => navigate("/admin")}
          children="Dashboard"
        />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={() => navigate("/admin/projects")}
          children="Projects"
        />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={() => navigate("/admin/techs")}
          children="Techs"
        />
      </div>
      <Divider />
      <Button
        color="error"
        variant="contained"
        onClick={signOut}
        children="Sign Out"
      />
    </div>
  )
}

export default LayoutAdminNavigation;