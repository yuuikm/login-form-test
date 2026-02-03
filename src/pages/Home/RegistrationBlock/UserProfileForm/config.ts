import * as Yup from "yup";
import type { FormField } from "./types";

export const UserProfileFormTexts = {
  title: "Анкета пользователя",
  description: "Заполните информацию о себе",
  lastNamePlaceholder: "Фамилия*",
  firstNamePlaceholder: "Имя*",
  middleNamePlaceholder: "Отчество",
  emailPlaceholder: "Email*",
  passwordPlaceholder: "Пароль*",
  confirmPasswordPlaceholder: "Пароль*",
  binPlaceholder: "БИН*",
  iinPlaceholder: "ИИН*",
  buttonText: "ЗАВЕРШИТЬ РЕГИСТРАЦИЮ",

  errors: {
    lastNameRequired: "Фамилия обязательна",
    firstNameRequired: "Имя обязательно",
    emailRequired: "Email обязателен",
    emailInvalid: "Некорректный формат email",
    passwordRequired: "Пароль обязателен",
    passwordInvalid: "Минимум 8 символов, буквы и цифры",
    passwordsMustMatch: "Пароли должны совпадать",
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
    name: "confirmPassword",
    type: "password",
    placeholder: UserProfileFormTexts.confirmPasswordPlaceholder,
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
    maxLength: 12,
    digitsOnly: true,
  },
];

export const validationSchema = (selectedRole: "customer" | "carrier" | null) =>
  Yup.object().shape({
    lastName: Yup.string().required(
      UserProfileFormTexts.errors.lastNameRequired,
    ),
    firstName: Yup.string().required(
      UserProfileFormTexts.errors.firstNameRequired,
    ),
    middleName: Yup.string(),
    email: Yup.string()
      .email(UserProfileFormTexts.errors.emailInvalid)
      .required(UserProfileFormTexts.errors.emailRequired),
    password: Yup.string()
      .min(8, UserProfileFormTexts.errors.passwordInvalid)
      .matches(/[a-zA-Z]/, UserProfileFormTexts.errors.passwordInvalid)
      .matches(/\d/, UserProfileFormTexts.errors.passwordInvalid)
      .required(UserProfileFormTexts.errors.passwordRequired),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        UserProfileFormTexts.errors.passwordsMustMatch,
      )
      .required(UserProfileFormTexts.errors.passwordsMustMatch),
    iinBin: Yup.string()
      .matches(/^\d{12}$/, UserProfileFormTexts.errors.iinBinInvalid)
      .required(
        selectedRole === "customer"
          ? UserProfileFormTexts.errors.binRequired
          : UserProfileFormTexts.errors.iinRequired,
      ),
  });
