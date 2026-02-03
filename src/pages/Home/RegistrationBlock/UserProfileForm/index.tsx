import { useState } from "react";
import Input from "@/shared/input";
import Button from "@/shared/button";
import {
  UserProfileFormTexts,
  getFormFields,
  validators,
} from "@/pages/Home/RegistrationBlock/UserProfileForm/config";
import type {
  UserProfileFormProps,
  UserProfileData,
  FormErrors,
} from "@/pages/Home/RegistrationBlock/UserProfileForm/types";

const UserProfileForm = ({
  selectedRole,
  onComplete,
}: UserProfileFormProps) => {
  const [formData, setFormData] = useState<UserProfileData>({
    lastName: "",
    firstName: "",
    middleName: "",
    email: "",
    password: "",
    iinBin: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const formFields = getFormFields(selectedRole);

  const handleChange = (name: keyof UserProfileData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.lastName.trim()) {
      newErrors.lastName = UserProfileFormTexts.errors.lastNameRequired;
    }
    if (!formData.firstName.trim()) {
      newErrors.firstName = UserProfileFormTexts.errors.firstNameRequired;
    }
    if (!formData.email.trim()) {
      newErrors.email = UserProfileFormTexts.errors.emailRequired;
    } else if (!validators.validateEmail(formData.email)) {
      newErrors.email = UserProfileFormTexts.errors.emailInvalid;
    }
    if (!formData.password) {
      newErrors.password = UserProfileFormTexts.errors.passwordRequired;
    } else if (!validators.validatePassword(formData.password)) {
      newErrors.password = UserProfileFormTexts.errors.passwordInvalid;
    }
    if (!formData.iinBin) {
      newErrors.iinBin =
        selectedRole === "customer"
          ? UserProfileFormTexts.errors.binRequired
          : UserProfileFormTexts.errors.iinRequired;
    } else if (!validators.validateIinBin(formData.iinBin)) {
      newErrors.iinBin = UserProfileFormTexts.errors.iinBinInvalid;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onComplete(formData);
    }
  };

  const isFormValid =
    formData.lastName.trim() &&
    formData.firstName.trim() &&
    validators.validateEmail(formData.email) &&
    validators.validatePassword(formData.password) &&
    validators.validateIinBin(formData.iinBin);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        {UserProfileFormTexts.title}
      </h2>
      <p className="text-gray-600 mb-8">{UserProfileFormTexts.description}</p>

      <div className="space-y-4 mb-8">
        {formFields.map((field) => (
          <div key={field.name}>
            <Input
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onChange={(value) => handleChange(field.name, value)}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}
      </div>

      <Button
        variant={isFormValid ? "active" : "inactive"}
        fullWidth
        disabled={!isFormValid}
        onClick={handleSubmit}
      >
        {UserProfileFormTexts.buttonText}
      </Button>
    </div>
  );
};

export default UserProfileForm;
