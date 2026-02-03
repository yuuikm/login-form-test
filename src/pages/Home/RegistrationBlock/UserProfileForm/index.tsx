import { useFormik } from "formik";
import Input from "@/shared/input";
import Button from "@/shared/button";
import {
  UserProfileFormTexts,
  getFormFields,
  validationSchema,
} from "@/pages/Home/RegistrationBlock/UserProfileForm/config";
import type {
  UserProfileFormProps,
  UserProfileData,
} from "@/pages/Home/RegistrationBlock/UserProfileForm/types";

const UserProfileForm = ({
  selectedRole,
  onComplete,
}: UserProfileFormProps) => {
  const formFields = getFormFields(selectedRole);

  const formik = useFormik<UserProfileData>({
    initialValues: {
      lastName: "",
      firstName: "",
      middleName: "",
      email: "",
      password: "",
      confirmPassword: "",
      iinBin: "",
    },
    validationSchema: validationSchema(selectedRole),
    onSubmit: (values) => {
      onComplete(values);
    },
  });

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
              name={field.name}
              placeholder={field.placeholder}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              maxLength={field.maxLength}
              digitsOnly={field.digitsOnly}
            />
            {formik.touched[field.name] && formik.errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors[field.name]}
              </p>
            )}
          </div>
        ))}
      </div>

      <Button
        variant={formik.isValid && formik.dirty ? "active" : "inactive"}
        fullWidth
        disabled={!formik.isValid || !formik.dirty}
        onClick={() => formik.handleSubmit()}
      >
        {UserProfileFormTexts.buttonText}
      </Button>
    </div>
  );
};

export default UserProfileForm;
