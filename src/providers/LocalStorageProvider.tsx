import { useEffect, useState } from "react";
import LocalStorageContext from "../contexts/LocalStorageContext";

type tLocalStorageProviderProps = {
  children: React.ReactNode
}

const getLanguage = (): 'en' | 'de' => {
  const language = localStorage.getItem('language')
  if(language) {
    if(language === 'en') return 'en';
    if(language === 'de') return 'de';
  }

  return 'en';
}

const LocalStorageProvider = ({ children }: tLocalStorageProviderProps) => {
  const [ language, setLanguage ] = useState<'en' | 'de'>(getLanguage());

  const changeLanguage = (language: 'en' | 'de') => {
    localStorage.setItem('language', language);
    setLanguage(language);
  }

  useEffect(() => {
    changeLanguage(getLanguage());
  }, [])

  return (
    <LocalStorageContext.Provider 
      value={{ language, changeLanguage }}
      children={children}  
    />
  )
}

export default LocalStorageProvider
