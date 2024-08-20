import { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

const AllContext = createContext();

export function Context({ children }) {

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const direction = language === "ar" ? "rtl" : "ltr"


  useEffect(() => {
    if (localStorage.i18nextLng == 'en-US') {
      setLanguage('ar');
      i18n.changeLanguage("ar")
    }
    setLanguage(i18n.language); // Sync state with i18n language on component mount
  }, [i18n.language]);

  return (
    <AllContext.Provider value={{ language, setLanguage, direction }}>
      {children}
    </AllContext.Provider>
  );
}

export function useAllContext() {
  return useContext(AllContext);
}


