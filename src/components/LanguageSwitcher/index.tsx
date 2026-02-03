import { useTranslation } from "@/shared/hooks/useTranslation";

export const LanguageSwitcher = () => {
    const { i18n, changeLanguage } = useTranslation();

    return (
        <div className="flex gap-2">
            <button
                onClick={() => changeLanguage("ru")}
                className={`px-2 py-1 text-sm rounded transition-colors ${i18n.language === "ru"
                        ? "bg-primary text-white font-medium"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
            >
                RU
            </button>
            <button
                onClick={() => changeLanguage("en")}
                className={`px-2 py-1 text-sm rounded transition-colors ${i18n.language === "en"
                        ? "bg-primary text-white font-medium"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
            >
                EN
            </button>
        </div>
    );
};
