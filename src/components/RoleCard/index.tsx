interface RoleCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    selected: boolean;
    onClick: () => void;
}

const RoleCard = ({
    title,
    description,
    icon,
    selected,
    onClick,
}: RoleCardProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
        w-full p-6 rounded-xl border-2 transition-all text-left
        ${selected
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }
      `}
        >
            <div className="flex items-center gap-4">
                <div className={`text-4xl ${selected ? "text-primary" : "text-gray-400"}`}>
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{description}</p>
                </div>
            </div>
        </button>
    );
};

export default RoleCard;
