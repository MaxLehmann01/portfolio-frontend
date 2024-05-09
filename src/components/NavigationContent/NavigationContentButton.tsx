import { SvgIconProps, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type tNavigationContentButtonProps = {
  title: React.ReactNode,
  icon?: FC<SvgIconProps>,
  destination: string
}

const NavigationContentButton = ({ title, icon: Icon, destination }: tNavigationContentButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-1">
      { Icon ? <Icon fontSize="small" /> : <></>}
      <button
        className="group transition duration-200 relative"
        onClick={() => navigate(destination)}
      >
        <Typography variant="subtitle1">{ title }</Typography>
        <span className="block max-w-0 bottom-0 left-0 right-0 group-hover:max-w-full transition-all duration-200 h-0.5 absolute bg-white"></span>
      </button>
    </div>
  )
}

export default NavigationContentButton;