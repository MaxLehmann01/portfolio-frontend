import { createContext } from "react";

type tLocalStorageContext = {
  language: 'en' | 'de';
  changeLanguage: (language: 'en' | 'de') => void;
}

const LocalStorageContext = createContext<tLocalStorageContext | undefined>(undefined);

export default LocalStorageContext;
