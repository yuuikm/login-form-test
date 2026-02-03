import type { FormField } from "./types";

export const UserProfileFormTexts = {
  title: "Анкета пользователя",
  description: "Заполните информацию о себе",
  lastNamePlaceholder: "Фамилия*",
  firstNamePlaceholder: "Имя*",
  middleNamePlaceholder: "Отчество",
  emailPlaceholder: "Email*",
  passwordPlaceholder: "Пароль*",
  binPlaceholder: "БИН (12 цифр)*",
  iinPlaceholder: "ИИН (12 цифр)*",
  buttonText: "ЗАВЕРШИТЬ РЕГИСТРАЦИЮ",

  errors: {
    lastNameRequired: "Фамилия обязательна",
    firstNameRequired: "Имя обязательно",
    emailRequired: "Email обязателен",
    emailInvalid: "Некорректный формат email",
    passwordRequired: "Пароль обязателен",
    passwordInvalid: "Минимум 8 символов, буквы и цифры",
    binRequired: "БИН обязателен",
    iinRequired: "ИИН обязателен",
    iinBinInvalid: "Должно быть ровно 12 цифр",
  },
};

export const getFormFields = (
  selectedRole: "customer" | "carrier" | null,
): FormField[] => [
  {
    name: "lastName",
    type: "text",
    placeholder: UserProfileFormTexts.lastNamePlaceholder,
    required: true,
  },
  {
    name: "firstName",
    type: "text",
    placeholder: UserProfileFormTexts.firstNamePlaceholder,
    required: true,
  },
  {
    name: "middleName",
    type: "text",
    placeholder: UserProfileFormTexts.middleNamePlaceholder,
    required: false,
  },
  {
    name: "email",
    type: "email",
    placeholder: UserProfileFormTexts.emailPlaceholder,
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: UserProfileFormTexts.passwordPlaceholder,
    required: true,
  },
  {
    name: "iinBin",
    type: "text",
    placeholder:
      selectedRole === "customer"
        ? UserProfileFormTexts.binPlaceholder
        : UserProfileFormTexts.iinPlaceholder,
    required: true,
  },
];

// Validation patterns and functions
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: {
    minLength: 8,
    hasLetters: /[a-zA-Z]/,
    hasDigits: /\d/,
  },
  iinBin: /^\d{12}$/,
};

export const validators = {
  validateEmail: (email: string): boolean => {
    return VALIDATION_PATTERNS.email.test(email);
  },

  validatePassword: (password: string): boolean => {
    return (
      password.length >= VALIDATION_PATTERNS.password.minLength &&
      VALIDATION_PATTERNS.password.hasLetters.test(password) &&
      VALIDATION_PATTERNS.password.hasDigits.test(password)
    );
  },

  validateIinBin: (value: string): boolean => {
    return VALIDATION_PATTERNS.iinBin.test(value);
  },
};
