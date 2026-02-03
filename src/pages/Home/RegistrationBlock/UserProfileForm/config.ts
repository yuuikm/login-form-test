import * as Yup from "yup";
import type { FormField } from "./types";

export const UserProfileFormTexts = {
    title: "registration.profile.title",
    description: "registration.profile.description",
    lastNamePlaceholder: "registration.profile.placeholders.lastName",
    firstNamePlaceholder: "registration.profile.placeholders.firstName",
    middleNamePlaceholder: "registration.profile.placeholders.middleName",
    emailPlaceholder: "registration.profile.placeholders.email",
    passwordPlaceholder: "registration.profile.placeholders.password",
    confirmPasswordPlaceholder: "registration.profile.placeholders.confirmPassword",
    binPlaceholder: "registration.profile.placeholders.bin",
    iinPlaceholder: "registration.profile.placeholders.iin",
    buttonText: "common.completeRegistration",

    errors: {
        lastNameRequired: "registration.profile.errors.lastNameRequired",
        firstNameRequired: "registration.profile.errors.firstNameRequired",
        emailRequired: "registration.profile.errors.emailRequired",
        emailInvalid: "registration.profile.errors.emailInvalid",
        passwordRequired: "registration.profile.errors.passwordRequired",
        passwordInvalid: "registration.profile.errors.passwordInvalid",
        passwordsMustMatch: "registration.profile.errors.passwordsMustMatch",
        binRequired: "registration.profile.errors.binRequired",
        iinRequired: "registration.profile.errors.iinRequired",
        iinBinInvalid: "registration.profile.errors.iinBinInvalid",
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
