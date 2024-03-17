import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import FlagDE from "../../assets/flags/flag-de.png";
import FlagUK from "../../assets/flags/flag-uk.png";
import useLocalStorage from "../../hooks/useLocalStorage";

const NavigationLanguage = () => {
  const { language, changeLanguage } = useLocalStorage();
  const [ menuAnchorElement, setMenuAnchorElement ] = useState<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorElement(event.currentTarget);
  }

  const handleMenuClose = () => {
    setMenuAnchorElement(null);
  }

  const handleChangeLanguage = (language: 'en' | 'de') => {
    changeLanguage(language);
    handleMenuClose();
  }

  return (
    <>
     <IconButton
        size="small"
        className="w-[34px] h-[34px]"
        children={(
          <img 
            src={language === 'de' ? FlagDE : FlagUK} 
            className="w-[22px] h-[22px] rounded-full" 
          />
        )}
        onClick={handleMenuOpen}
      />
      <Menu
        open={Boolean(menuAnchorElement)} 
        anchorEl={menuAnchorElement} 
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleChangeLanguage('de')}>
          <ListItemIcon>
            <img 
              src={FlagDE} 
              alt="Germany flag" 
              className="h-[24px] w-[24px] rounded-full"
            />
          </ListItemIcon>
          <ListItemText>German</ListItemText>
        </MenuItem>
        <Divider className="bg-[#121315]" />
        <MenuItem onClick={() => handleChangeLanguage('en')}>
          <ListItemIcon>
            <img 
              src={FlagUK} 
              alt="United kingdom flag" 
              className="h-[24px] w-[24px] rounded-full"
            />
          </ListItemIcon>
          <ListItemText>English</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}

export default NavigationLanguage