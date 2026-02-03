import { useState, useRef, useEffect } from "react";

export interface Country {
    code: string;
    flag: string;
    dialCode: string;
}

interface InputProps {
    type?: "text" | "email" | "password" | "tel";
    placeholder?: string;
    value?: string;
    onChange?: (e: string | React.ChangeEvent<HTMLInputElement>) => void;
    countries?: Country[];
    defaultCountry?: Country;
    name?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    maxLength?: number;
    digitsOnly?: boolean;
}

const formatPhoneValue = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (digits.length === 0) return "";
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    if (digits.length <= 8)
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(
        8,
    )}`;
};

const Input = ({
    type = "text",
    placeholder,
    value,
    onChange,
    countries,
    defaultCountry,
    name,
    onBlur,
    maxLength,
    digitsOnly,
}: InputProps) => {
    const [inputValue, setInputValue] = useState(value || "");
    const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
        defaultCountry,
    );
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const isPhoneInput = type === "tel" && countries && countries.length > 0;

    // Sync local state with prop value only when prop value changes and differs
    useEffect(() => {
        if (value !== undefined && value !== inputValue) {
            setInputValue(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;

        if (isPhoneInput) {
            const formatted = formatPhoneValue(newValue);
            setInputValue(formatted);
            onChange?.(formatted);
            return;
        }

        if (digitsOnly) {
            newValue = newValue.replace(/\D/g, "");
        }

        if (maxLength && newValue.length > maxLength) {
            newValue = newValue.slice(0, maxLength);
        }

        setInputValue(newValue);

        if (onChange) {
            const syntheticEvent = {
                ...e,
                target: {
                    ...e.target,
                    name: name,
                    value: newValue,
                },
            };
            onChange(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
        }
    };

    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
    };

    if (isPhoneInput) {
        return (
            <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 bg-white transition-colors">
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-1 mr-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-2 py-1 transition-colors text-gray-700 dark:text-gray-200"
                    >
                        <span>{selectedCountry?.flag}</span>
                        <svg
                            className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg shadow-lg z-10 min-w-[150px]">
                            {countries.map((country) => (
                                <button
                                    key={country.code}
                                    type="button"
                                    onClick={() => handleCountrySelect(country)}
                                    className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
                                >
                                    <span>{country.flag}</span>
                                    <span className="text-sm dark:text-gray-200">{country.code}</span>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {country.dialCode}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <span className="mr-2 text-gray-900">{selectedCountry?.dialCode}</span>

                <input
                    ref={inputRef}
                    type="tel"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    name={name}
                    onBlur={onBlur}
                    className="flex-1 outline-none text-gray-900 bg-transparent placeholder-gray-400"
                />
            </div>
        );
    }

    return (
        <input
            type={type}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            name={name}
            onBlur={onBlur}
            className="w-full px-4 h-14 rounded-xl border border-gray-300 outline-none focus:border-primary transition-colors placeholder-gray-400 bg-white text-gray-900"
        />
    );
};

export default Input;
