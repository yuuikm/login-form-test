import React, { useRef, useMemo } from "react";
import type { KeyboardEvent } from "react";

interface OTPInputProps {
  length?: number;
  onChange: (code: string) => void;
  value?: string;
}

const OTPInput = ({ length = 6, onChange, value = "" }: OTPInputProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const otp = useMemo(() => {
    if (value) {
      const digits = value.split("").slice(0, length);
      return [...digits, ...Array(length - digits.length).fill("")];
    }
    return Array(length).fill("");
  }, [value, length]);

  const handleChange = (index: number, digit: string) => {
    if (!/^\d*$/.test(digit)) return;

    const newOtp = [...otp];
    newOtp[index] = digit.slice(-1);

    onChange(newOtp.join(""));

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "");
    const digits = pastedData.split("").slice(0, length);
    const newOtp = [...digits, ...Array(length - digits.length).fill("")];
    onChange(newOtp.join(""));

    const nextEmptyIndex = digits.length < length ? digits.length : length - 1;
    inputRefs.current[nextEmptyIndex]?.focus();
  };

  return (
    <div className="flex gap-3 justify-center">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
        />
      ))}
    </div>
  );
};

export default OTPInput;
