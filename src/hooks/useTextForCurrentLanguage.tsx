import useLocalStorage from "../hooks/useLocalStorage";

const useTextForCurrentLanguage = (translations: { lang: string, text: string }[]) => {
  const { language } = useLocalStorage();
  const translation = translations.find(t => t.lang === language);
  return translation ? translation.text : '';
};

export default useTextForCurrentLanguage;