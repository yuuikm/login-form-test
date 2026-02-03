export interface UserProfileFormProps {
    selectedRole: "customer" | "carrier" | null;
    onComplete: (data: UserProfileData) => void;
}

export interface UserProfileData {
    lastName: string;
    firstName: string;
    middleName: string;
    email: string;
    password: string;
    iinBin: string;
}

export interface FormField {
    name: keyof UserProfileData;
    type: "text" | "email" | "password";
    placeholder: string;
    required: boolean;
}

export type FormErrors = Partial<Record<keyof UserProfileData, string>>;
