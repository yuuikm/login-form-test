import { useState, useEffect } from "react";
import i18n from "../../i18n/i18n";

export const useTranslation = () => {
    const [t, setT] = useState(() => i18n.t.bind(i18n));

    useEffect(() => {
        const handleLanguageChanged = () => {
            setT(() => i18n.t.bind(i18n));
        };

        i18n.on("languageChanged", handleLanguageChanged);
        return () => {
            i18n.off("languageChanged", handleLanguageChanged);
        };
    }, []);

    return {
        t,
        i18n,
        changeLanguage: (lng: string) => {
            i18n.changeLanguage(lng);
            localStorage.setItem("language", lng);
        }
    };
};
