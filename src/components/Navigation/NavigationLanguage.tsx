import { styled, Switch, Tooltip } from "@mui/material";
import FlagDE from "../../assets/flags/flag-de.png";
import FlagUK from "../../assets/flags/flag-uk.png";
import useLocalStorage from "../../hooks/useLocalStorage";

const StyledLanguageSwitch = styled(Switch)(() => ({
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translate(8px, 6px)',
    '&.Mui-checked': {
      transform: 'translate(24px, 6px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${FlagUK})`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#0e0c19',
      },
    }
  },
  '& .MuiSwitch-thumb': {
    height: 24,
    width: 24,
    '&::before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      borderRadius: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${FlagDE})`,
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#0e0c19',
  },
}));

const NavigationLanguage = () => {
  const { language, changeLanguage } = useLocalStorage();

  const handleChangeLanguage = (language: 'en' | 'de') => {
    changeLanguage(language);
  }

  return (
    <Tooltip title={language === 'de' ? 'Auf Englisch wechseln' : 'Change to German'}>
      <StyledLanguageSwitch
        checked={language === 'en'}
        onChange={() => handleChangeLanguage(language === 'en' ? 'de' : 'en')}
      />
    </Tooltip>
  )
}

export default NavigationLanguage