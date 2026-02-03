import { useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "@/shared/hooks/useTranslation";
import { RegistrationBlockTexts, countries, defaultCountry } from "./config";
import Button from "@/shared/button";
import Input from "@/shared/input";
import Checkbox from "@/shared/checkbox";
import RoleSelection from "@/pages/Home/RegistrationBlock/RoleSelection";
import OTPVerification from "@/pages/Home/RegistrationBlock/OTPVerification";
import UserProfileForm from "@/pages/Home/RegistrationBlock/UserProfileForm";
import type { UserProfileData } from "@/pages/Home/RegistrationBlock/UserProfileForm/types";

type Step = 0 | 1 | 2 | 3;

function RegistrationBlock() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<Step>(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [selectedRole, setSelectedRole] = useState<
    "customer" | "carrier" | null
  >(null);

  const isPhoneValid = phoneNumber.replace(/\D/g, "").length === 10;
  const isStep0Valid = isPhoneValid && isAgreed;

  const handlePhoneChange = (
    e: string | React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (typeof e === "string") {
      setPhoneNumber(e);
    } else {
      setPhoneNumber(e.target.value);
    }
  };

  const handleSendOTP = () => {
    setTimeout(() => {
      setCurrentStep(1);
    }, 1000);
  };

  const handleRoleContinue = () => {
    setCurrentStep(2);
  };

  const handleOTPVerify = () => {
    setCurrentStep(3);
  };

  const handleResendOTP = () => {
    console.log("Resending OTP to", phoneNumber);
  };

  const handleProfileComplete = (data: UserProfileData) => {
    const fullUserData = {
      ...data,
      phone: phoneNumber,
      role: selectedRole,
    };

    localStorage.setItem("user_data", JSON.stringify(fullUserData));

    navigate("/dashboard", {
      state: {
        userData: fullUserData,
      },
    });
  };

  return (
    <div className="flex w-full lg:w-1/2 flex-col p-6 lg:p-24 items-center bg-white transition-colors duration-300">
      <div className="w-full">
        {currentStep === 0 && (
          <>
            <h1 className="text-2xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              {t(RegistrationBlockTexts.title)}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t(RegistrationBlockTexts.description)}
            </p>

            <div className="mb-6">
              <Input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder={t(RegistrationBlockTexts.phonePlaceholder)}
                countries={countries}
                defaultCountry={defaultCountry}
              />
            </div>

            <div className="mb-8">
              <Checkbox checked={isAgreed} onChange={setIsAgreed}>
                {t(RegistrationBlockTexts.privacyPolicyPrefix)}{" "}
                <a href="#" className="underline">
                  {t(RegistrationBlockTexts.privacyPolicyLink)}
                </a>
              </Checkbox>
            </div>

            <Button
              variant={isStep0Valid ? "active" : "inactive"}
              fullWidth
              disabled={!isStep0Valid}
              onClick={handleSendOTP}
            >
              {t(RegistrationBlockTexts.buttonText)}
            </Button>
          </>
        )}

        {currentStep === 1 && (
          <RoleSelection
            selectedRole={selectedRole}
            onRoleSelect={setSelectedRole}
            onContinue={handleRoleContinue}
          />
        )}

        {currentStep === 2 && (
          <OTPVerification
            phoneNumber={phoneNumber}
            onVerify={handleOTPVerify}
            onResend={handleResendOTP}
          />
        )}

        {currentStep === 3 && (
          <UserProfileForm
            selectedRole={selectedRole}
            onComplete={handleProfileComplete}
          />
        )}
      </div>
    </div>
  );
}

export default RegistrationBlock;
