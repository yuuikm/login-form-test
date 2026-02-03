import { useState, useEffect } from "react";
import { useTranslation } from "@/shared/hooks/useTranslation";
import OTPInput from "@/components/OTPInput";
import Button from "@/shared/button";
import {
  OTPVerificationTexts,
  OTP_CONFIG,
} from "@/pages/Home/RegistrationBlock/OTPVerification/config";

interface OTPVerificationProps {
  phoneNumber: string;
  onVerify: () => void;
  onResend: () => void;
}

const OTPVerification = ({
  phoneNumber,
  onVerify,
  onResend,
}: OTPVerificationProps) => {
  const { t } = useTranslation();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(OTP_CONFIG.timerDuration);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (code: string) => {
    setOtp(code);
    setError("");
  };

  const handleVerify = () => {
    if (otp === OTP_CONFIG.validCode) {
      onVerify();
    } else {
      setError(OTPVerificationTexts.errorInvalidCode);
    }
  };

  const handleResend = () => {
    setTimer(OTP_CONFIG.timerDuration);
    setCanResend(false);
    setOtp("");
    setError("");
    onResend();
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        {t(OTPVerificationTexts.title)}
      </h2>
      <p className="text-gray-600 mb-8">
        {t(OTPVerificationTexts.description)} {phoneNumber}
      </p>

      <div className="mb-6">
        <OTPInput
          length={OTP_CONFIG.length}
          value={otp}
          onChange={handleOtpChange}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{t(error)}</p>
      )}

      <div className="text-center mb-8">
        {canResend ? (
          <button
            onClick={handleResend}
            className="text-primary hover:underline text-sm"
          >
            {t(OTPVerificationTexts.resendButton)}
          </button>
        ) : (
          <p className="text-gray-500 text-sm">
            {t(OTPVerificationTexts.resendTimer)} {timer}{" "}
            {t(OTPVerificationTexts.timerUnit)}
          </p>
        )}
      </div>

      <Button
        variant={otp.length === OTP_CONFIG.length ? "active" : "inactive"}
        fullWidth
        disabled={otp.length !== OTP_CONFIG.length}
        onClick={handleVerify}
      >
        {t(OTPVerificationTexts.buttonText)}
      </Button>
    </div>
  );
};

export default OTPVerification;
