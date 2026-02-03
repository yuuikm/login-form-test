import type { Country } from "@/shared/input";

export const RegistrationBlockTexts = {
  title: "Регистрация",
  description:
    "Для входа в личный кабинет введите свой номер телефона, на него будет отправлено SMS с проверочным кодом",
  phonePlaceholder: "(000) 000-00-00",
  privacyPolicyPrefix: "Согласен с",
  privacyPolicyLink: "политикой конфиденциальности",
  buttonText: "ВОЙТИ",
};

export const countries: Country[] = [
  { code: "KZ", flag: "🇰🇿", dialCode: "+7" },
  { code: "RU", flag: "🇷🇺", dialCode: "+7" },
  { code: "US", flag: "🇺🇸", dialCode: "+1" },
];

export const defaultCountry: Country = countries[0];
