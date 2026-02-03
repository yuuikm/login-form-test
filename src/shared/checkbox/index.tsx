interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    children?: React.ReactNode;
}

const Checkbox = ({ checked, onChange, label, children }: CheckboxProps) => {
    return (
        <label className="flex items-start gap-3 cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
            {label && <span className="text-sm text-gray-700">{label}</span>}
            {children && <div className="text-sm text-gray-700">{children}</div>}
        </label>
    );
};

export default Checkbox;
