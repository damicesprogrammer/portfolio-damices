import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { content, type Lang } from "@/content/portfolio";

const STORAGE_KEY = "lang";

const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start in English so the server render and first client render match,
  // then switch to the saved or browser language after hydration.
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      // storage unavailable (private mode, blocked cookies)
    }
    if (saved === "en" || saved === "pt") setLang(saved);
    else if (navigator.language.toLowerCase().startsWith("pt")) setLang("pt");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  function changeLang(next: Lang) {
    setLang(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const { lang, setLang } = useContext(LanguageContext);
  return { lang, setLang, t: content[lang] };
}
