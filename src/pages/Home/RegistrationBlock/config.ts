import type { Country } from "@/shared/input";

export const RegistrationBlockTexts = {
  title: "registration.title",
  description: "registration.description",
  phonePlaceholder: "registration.phonePlaceholder",
  privacyPolicyPrefix: "common.privacyPrefix",
  privacyPolicyLink: "common.privacyLink",
  buttonText: "common.login",
};

export const countries: Country[] = [
  { code: "KZ", flag: "🇰🇿", dialCode: "+7" },
  { code: "RU", flag: "🇷🇺", dialCode: "+7" },
  { code: "US", flag: "🇺🇸", dialCode: "+1" },
];

export const defaultCountry: Country = countries[0];
