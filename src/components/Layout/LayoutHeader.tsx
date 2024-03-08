import { Code, EmojiPeople, Forum, Language, MenuRounded, School } from "@mui/icons-material";
import NavigationButton from "../Navigation/NavigationButton";
import NavigationLanguage from "../Navigation/NavigationLanguage";
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const LayoutHeader = () => {
  const [ menuAnchorElement, setMenuAnchorElement ] = useState<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorElement(event.currentTarget);
  }

  const handleMenuClose = () => {
    setMenuAnchorElement(null);
  }
  
  return (
    <div className="h-[50px] w-full flex py-2 px-4 gap-4">
      <NavigationButton
        title={<>&lt;maxlehmann.dev <span className="text-[12px]">/</span>&gt;</>}
        destination="/"
      />
      <div className="flex-1 justify-end items-center gap-8 hidden lg:flex">
        <NavigationButton
          title="Projects"
          destination="/projects"
          icon={Code}
        />
        <NavigationButton
          title="Toolbox"
          destination="/toolbox"
          icon={School}
        />
        <NavigationButton
          title="About"
          destination="/about"
          icon={EmojiPeople}
        />
        <NavigationButton
          title="Contact"
          destination="/contact"
          icon={Forum}
        />
        <NavigationLanguage />
      </div>
      <div className="flex-1 justify-end items-center hidden max-lg:flex">
        <IconButton
          onClick={handleMenuOpen}
          children={<MenuRounded className="text-white" />}
        />
         <Menu
            open={Boolean(menuAnchorElement)} 
            anchorEl={menuAnchorElement} 
            onClose={handleMenuClose}
          >
          <MenuItem>
            <ListItemIcon>
              <Code className="text-white" fontSize="small" />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <School className="text-white" fontSize="small" />
            </ListItemIcon>
            <ListItemText>Toolbox</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <EmojiPeople className="text-white" fontSize="small" />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Forum className="text-white" fontSize="small" />
            </ListItemIcon>
            <ListItemText>Contact</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Language className="text-white" fontSize="small" />
            </ListItemIcon>
            <ListItemText>Language</ListItemText>
          </MenuItem>
        </Menu>
      </div>
    </div>
  )
}

export default LayoutHeader;